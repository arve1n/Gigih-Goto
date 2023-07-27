# Database Structure

This document provides an overview of the database structure for the Tokopedia Play Backend. The application uses MongoDB as the database to store information about video thumbnails, products, and user comments.

## Collections

The database consists of three main collections:

1. **Video Thumbnails**: Stores information about video thumbnails that will be displayed on the home page.

2. **Products**: Contains information about various products available in the application.

3. **Comments**: Stores user comments on videos and products.

## Video Thumbnails Collection

- `VideoID` (String, required): Unique identifier for the video.
- `UrlImageThumbnail` (String, required): URL to the thumbnail image for the video.
- `UrlVid` (String, required): URL to the video.
  
## Products Collection

- `ProductID` (String, required): Unique identifier for the product.
- `LinkProduct` (String, required): URL to the product page.
- `Title` (String, required): Title of the product.
- `Price` (Number, required): Price of the product.

## Comments Collection

- `Username` (String, required): Name of the user who posted the comment.
- `Comment` (String, required): The user's comment.
- `timestamp` (Date, required): Timestamp indicating when the comment was submitted.

## API Endpoints

The API provides endpoints to interact with the database and perform CRUD operations on each collection. The API endpoints are organized as follows:

1. VideoThumbnail API
   - `GET /video-thumbnails`: Get all video thumbnails and show URLImageThumbnail.
   - `GET /video-thumbnails/:id`: Get the detail of a specific video by VideoID.
   - `POST /video-thumbnails`: Create a new video thumbnail.
   - `PUT /video-thumbnails/:id`: Update a video thumbnail by VideoID.
   - `DELETE /video-thumbnails/:id`: Delete a video thumbnail by VideoID.

2. Product API
   - `GET /products`: Get all products.
   - `GET /products/:id`: Get the detail of a specific product by ProductID.
   - `POST /products`: Create a new product.
   - `PUT /products/:id`: Update a product by ProductID.
   - `DELETE /products/:id`: Delete a product by ProductID.

3. Comment API
   - `GET /comments`: Get all comments.
   - `GET /comments/:id`: Get the detail of a specific comment by CommentID.
   - `POST /comments`: Create a new comment.
   - `PUT /comments/:id`: Update a comment by CommentID.
   - `DELETE /comments/:id`: Delete a comment by CommentID.

## Database Connection

The application connects to a local MongoDB instance running on port 27017. Make sure you have MongoDB installed and running before starting the application.

## Dependencies

- Express: Backend web application framework.
- Mongoose: MongoDB object modeling for Node.js.
- Cors: Middleware to enable Cross-Origin Resource Sharing (CORS).

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the application using `npm start`.
