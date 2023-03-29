# Frontend of Professor Adrien Zakar's GeoCistern Website

The goal of this project is to provide a visual display of entries from a database containing ancient Middle Eastern texts, maps, and atlases.

This project runs runs with a React frontend and calls python API's from our [backend](https://github.com/20LiamB/geocistern-backend-repo) using FastAPI. We connect containers using Docker. 

## Prerequisites

Before starting, make sure you have the following installed on your computer:

* Docker
* Node.js
* npm
* Python 3.x

## Getting Started 

To run the project on your own computer, follow these steps:

1. Clone the repository from GitHub:

```git clone https://github.com/20LiamB/geocistern-backend-repo.git ```

2. Navigate to the project

3. Install the frontend dependencies:

```npm install```

4. Navigate to `backend` folder and start the backend using Docker:


```
cd backend
./runDockerBackend.sh
```


5. Open a new terminal window and navigate to `frontend` folder and start the frontend using Docker:

```
cd frontend
./runDockerFrontend.sh
```

## Notes

In the future, we have much to update on this project. There are currently tasks to complete in the `issues` tab of the project. The issues contain documentation and potential steps on how to tackle the tasks. This includes several bug fixes, filtering features, and data visualization features.

Also in the future, we want to publish and deploy the website to production, allowing anyone to gain access to and learn from the website.

## Technologies used

* React
* FastAPI
* Python
* Docker

## Contributors

* Liam Bakar (20LiamB)
