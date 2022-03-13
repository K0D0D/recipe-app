# 🍔 Recipe App

Recipe app build with React, Redux Toolkit, Firebase and [Spoonacular API](https://spoonacular.com/food-api)

![Screenshot](/src/assets/screen.png)

## 🔥 Features

- Search by recipe title, meal type and diet
- Detailed meal info
- User Sign In and user Sign Up
- Add/Remove to/from "Bookmarks" functionality
- Shopping list functionality
- Responsiveness

## 💻 Run locally

- Clone it

```bash
git clone https://github.com/K0D0D/recipe-app.git
```

- Go to the project directory

```bash
cd recipe-app
```

- Install npm dependencies

```bash
npm i
```

- Create a .env file

- Create a project inside Google Firebase and export the config

- Get your API key from [Spoonacular API](https://spoonacular.com/food-api)

- Add the config inside the .env file

```bash
#API key from Spoonacular API
REACT_APP_API_KEY=YOUR_REACT_APP_API_KEY 
#Firebase config
REACT_APP_FIREBASE_API_KEY=YOUR_REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_REACT_APP_FIREBASE_MEASUREMENT_ID
```

- Start the server

```bash
npm start
```

## 👀 Demo

[Click here](https://recipe-app-b5ad1.web.app)