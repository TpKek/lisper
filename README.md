# 🔮 Lisper

A web application that anonymously shares random secrets. Built with Express.js, EJS, and the Secrets API to display whispered confessions from around the world.

![Lisper Preview](public/images/whisper-img.jpg)

## ✨ Features

- 🎲 **Random Secrets** - Fetches anonymous secrets from the Secrets API
- 🎨 **Beautiful UI** - Stylized card-based design with custom fonts
- ⚡ **Fast & Lightweight** - Minimal dependencies, quick load times
- 📱 **Responsive Design** - Works on all screen sizes

## 🚀 Demo

The app displays a random secret each time you visit or refresh the page, along with the username of the person who shared it.

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TpKek/lisper.git
   cd lisper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 💻 Usage

Simply visit the homepage to see a random anonymous secret. Refresh the page to discover new secrets!

## 🔧 Technologies Used

- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[Express.js](https://expressjs.com/)** - Web framework
- **[EJS](https://ejs.co/)** - Template engine
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[Secrets API](https://secrets-api.appbrewery.com/)** - Source of anonymous secrets

## 📁 Project Structure

```
lisper/
├── index.js           # Main application entry point
├── package.json       # Project dependencies
├── public/
│   ├── images/        # Static images
│   └── styles/        # CSS stylesheets
└── views/
    └── index.ejs      # Main template
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [App Brewery](https://www.appbrewery.co/) for the Secrets API
- Google Fonts for the beautiful typography

---

Made with ❤️ by [Bertin Dreyer](https://github.com/TpKek)
