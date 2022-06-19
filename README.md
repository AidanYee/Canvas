# Canvas

An online mapping tool that allows users to bring there artistic flourish to the streets of there local neighbourhood. Users can draw routes using our application in whatever shape or design they like. Then following directions they can physically create their master pieces.

## Run Locally

Clone the front end of the project

```bash
  git clone https://github.com/AidanYee/Canvas
```

Go to the project directory

```bash
  cd Canvas
```

Install dependencies

```bash
  npm install
```

Clone the back-end of the project

```bash
  git clone https://github.com/AidanYee/canvas-api-
```

Go to the project directory

```bash
  cd canvas-api-
```

Install dependencies

```bash
  npm install
```

###### Sign up for a free Map Tiler account and create a new API key:

Sign Up:
https://www.maptiler.com/

###### Sign up for a free Graph Hopper account and API key:

Sign Up:
https://support.graphhopper.com/support/solutions/articles/44001976025-sign-up-for-graphhopper

Create a basic API Key:
https://support.graphhopper.com/support/solutions/articles/44001976027-create-an-api-key

###### Before starting your servers up you will need to create an .env file in the canvas app main folder.

Replace [Your ****] with your personalized/appropriate values:

---

## .env file:

REACT_APP_API=http://localhost:[Your *PORT* (ex: 8080)]

REACT_APP_GHKEY=[Your GraphHopper API Key (ex: "string from Graph Hopper")]

REACT_APP_LINK=http://localhost:[Your *APP LINK* (ex: 3002)]

REACT_APP_MAPTILER_KEY=[Your Map Tiler Api Key (ex: "string from Map Tiler")]

---

###### You will need two terminal windows to run Canvas. One for the front-end & one for the back-end.

Start the front-end of the server

```bash
  npm start
```

Start the back-end of the server

```bash
  npm run dev
```

## Tech Stack

###### Client

- React v17.0.2
- React-router-dom V6.3.0
- React-leaflet v3.2.5
- React-leaflet-custom-control v1.2.2
- Leaflet v1.8.0
- Leaflet-routing-machine v3.2.12
- Lrm-graphhopper v1.3.0
- Axios v0.27.2
- MaterialUI v5.8.3

###### Server

- Node
- Express v4.17.1
- Morgan v1.9.1

###### Database

- ElephantSQL
