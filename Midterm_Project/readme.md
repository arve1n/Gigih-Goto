# Tokopedia Play Backend Prototype

This repository contains a Node.js-based backend API for managing videos, comments, and products. It uses Express.js for handling HTTP requests, MongoDB for data storage, and Mongoose for object modeling.

## Database Structure

The database structure consists of three main collections:

1. **Videos**: Stores information about the videos, including their titles, YouTube URLs, and thumbnail URLs.

2. **Comments**: Stores comments made on videos. Each comment is associated with a specific video through a reference to the video's ID.

3. **Products**: Stores information about various products, including their names, descriptions, and prices.

## API Structure

The API has the following endpoints:

### Videos

- `POST /videos`: Create a new video.
- `GET /videos`: Get a list of all videos.
- `GET /videos/:id`: Get a specific video by its ID.
- `PUT /videos/:id`: Update a video by its ID.
- `DELETE /videos/:id`: Delete a video by its ID.

### Comments

- `POST /comments`: Create a new comment on a video.
- `GET /comments`: Get a list of all comments.
- `GET /comments/:videoId`: Get all comments associated with a specific video by its ID.
- `PUT /comments/:id`: Update a comment by its ID.
- `DELETE /comments/:id`: Delete a comment by its ID.

### Products

- `POST /products`: Create a new product.
- `GET /products`: Get a list of all products.
- `GET /products/:id`: Get a specific product by its ID.
- `PUT /products/:id`: Update a product by its ID.
- `DELETE /products/:id`: Delete a product by its ID.

## API Request and Response Examples

Please check the following Gist for API request and response examples: 

## How to Run

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/video-management-api.git`
2. Navigate to the project folder: `cd video-management-api`
3. Install dependencies: `npm install`
4. Set up your MongoDB connection: Replace `'your-mongodb-connection-string'` in `index.js` with your actual MongoDB connection string.
5. Start the server: `node index.js`
6. The server should now be running on `http://localhost:3000`.
