# Tokopedia Play React Clone

This project is a Tokopedia Play clone built using ReactJS and the Ant Design UI component library and deployed on Netlify. This app is made as a final term assignment for GIGIH 3.0 FUllstack Track. The application allows users to watch videos, view video details, comment on videos, and more. This app is connected to this [Tokopedia Play backend API server](https://github.com/rizkyyusfian/tokopediaplay/tree/master).

## Features Implemented

- **Home Page:** Displays a list of videos with thumbnails fetched from the backend API Server.
- **Video Detail Page:** Displays detailed information about a selected video.
- **Login Page:** Users can log in using the provided credentials.
- **Commenting System:** Users can submit comments using input name and comment. additionally, when the user logged in, the input name automatically uses the user credential.
- **BONUS FEATURE**:
  - **Search Video:** Allows users to search for videos using keywords on the home page.
  - **User Profile:** Displays user profile photo and name in the top right corner.

## Components and Libraries Used

- ReactJS: A JavaScript library for building user interfaces.
- Ant Design: A popular UI library for React applications.
- React Router: Used for handling routing within the application.

## Deployment

The application is deployed on **Netlify** using [deploy-netlify branch](https://github.com/rizkyyusfian/tokopediaplay-react/tree/deploy-netlify). You can access the deployed app using the following link: [App Link](https://tokopediaplay-react.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/47c648e9-ede3-4ac8-a2a0-6a3cd9e35f18/deploy-status)](https://app.netlify.com/sites/tokopediaplay-react/deploys)

## How to Run Locally
To run the Tokopedia Play React Clone locally, follow these steps:

Clone the project. Make sure that you clone the **master** branch

```
  git clone https://github.com/rizkyyusfian/tokopediaplay-react.git
```

Go to the project directory

```
  cd tokopediaplay-react
```

Install dependencies

```
  npm install
```

Start the server

```
  npm start
```

The app can be accessed at `http://localhost:3000`.

## Additional Notes
**List of user accounts used for login:**
```
email: windah@gmail.com
password: windah123
```

```
email: lisa@gmail.com
password: lisa123
```

```
email: sammy@gmail.com
password: sammy123
```

## License

This project is licensed under the [MIT License](LICENSE).
