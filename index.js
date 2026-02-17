// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const url = 'https://secrets-api.appbrewery.com';

// Register EJS as the view engine explicitly
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// 3. Use the public folder for static files.
app.use(express.static(join(__dirname, 'public')));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${url}/random`);
    const secret = response.data.secret;
    const username = response.data.username;
    res.render('index', {
      secret: secret,
      user: username,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// 6. API endpoint for fetching new secrets (for client-side requests)
app.get('/api/secret', async (req, res) => {
  try {
    const response = await axios.get(`${url}/random`);
    res.json({
      secret: response.data.secret,
      username: response.data.username,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch secret' });
  }
});

// 7. Listen on your predefined port and start the server.

// Export app for Vercel serverless deployment
export default app;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
