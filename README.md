# react-photolabs

React Photo Viewer is a single-page application that allows users to view photos, browse different categories, like pictures, and navigate through a multi-page interface. The application is connected to a PostgreSQL database to store and retrieve photo data.

## Screenshots

![Screenshot of homepage](./frontend/public/mainPage.png)
![Screenshot of the modal view](./frontend/public/modalView.png)
![Screenshot of the photos group by categories](./frontend/public/topics.png)
![Screenshot of the photos group by categories in modal view](./frontend/public/modalSimilarPhotos.png)
![Screenshot of the dark mode feature](./frontend/public/darkMode.png)

## Features

- View photos
  - Users can view a collection of photos.
- Browse categories 
  - Navigate to different categories using the navbar.
- Like pictures
  - Users can like their favorite pictures.
- Modal view
  - Clicking on a picture opens up a modal which allow user to view the photo in detail and discover other similar photos.
- Dark mode
  - User can toggle between light and dark mode by clicking the moon button on navagation bar.
- Automatic Scroll
  - Clicking on a photo scrolls the view to the modal, displaying the clicked photo in detail.
  - Clicking similar photos in modal brings the user to the top of the modal content to enhance user experience.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```