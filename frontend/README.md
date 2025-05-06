# Welcome to the To-do App!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cloning the Repository
You can clone the repository by typing the following command into the console in your preferred directory:
```
git clone https://github.com/orlandojpwastaken/to-do-app/tree/main
```

## Initial Setup
In the project directory, you first need to run:

### `npm install`

which will install all the dependencies required for the application to work.

## Environment Setup

Before running the web application, you need to set up your environment variables. Create a `.env` file in the root directory of your project with the following variables:

```
REACT_APP_API_URL=http://localhost:3000
```

This will connect your frontend application to the backend server.

## Running the Web Application

After everything is set up, the application is ready to run. Input the following command into your terminal:

```bash
npm start
```

The application will start and be available at `http://localhost:3001`. You can access it by opening your browser and navigating to that URL.

## Features

- User authentication and authorization
- Create, read, update, and delete to-do items
- Responsive Material-UI design
- Session-based authentication
- Clean and intuitive user interface

## Tech Stack

- React
- Material-UI
- React Router v7
- Axios for API calls
- Emotion for styled components