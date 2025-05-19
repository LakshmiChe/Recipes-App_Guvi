
Recipe Manager API

This project is a complete CRUD (Create, Read, Update, Delete) application for managing recipes. The application is built using Node.js, Express.js, and MongoDB, and follows the MVC pattern. It also includes a web interface for viewing recipes and detailed API documentation in Postman.

Features

Create a new recipe

Retrieve all recipes

Retrieve a single recipe by ID

Update a recipe by ID

Delete a recipe by ID

Web interface for displaying recipes

Tech Stack

Node.js

Express.js

MongoDB (Mongoose)

EJS (for views)

Postman (for API testing)

Folder Structure

|-- config/
|   |-- db.js
|-- controllers/
|   |-- recipeController.js
|-- models/
|   |-- Recipe.js
|-- public/
|   |-- css/
|       |-- styles.css
|-- routes/
|   |-- recipeRoutes.js
|-- views/
|   |-- index.ejs
|   |-- recipes.ejs
|   |-- error.ejs
|-- .env
|-- app.js
|-- package.json
|-- README.md

Getting Started

1. Clone the Repository

git clone <repository_url>
cd <repository_name>

2. Install Dependencies

npm install

3. Setup Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=mongodb+srv://Lakshmi:Chezhiyan@cluster0.asylezr.mongodb.net/recipe-crud-db?retryWrites=true&w=majority

4. Run the Application

npm start

The application will run on http://localhost:5000.

API Endpoints

6. Access the application:
   - API endpoints: `http://localhost:5000/api/recipes`
   - Landing Page: `http://localhost:5000`

---

## API Documentation

| Method | Endpoint                 | Description                | Input Example                                                                 |
|--------|--------------------------|----------------------------|------------------------------------------------------------------------------|
| POST   | `/api/recipes`           | Create a new recipe        | `{ "title": "Pasta", "description": "Delicious", "ingredients": ["Flour"], "instructions": "Mix and cook." }` |
| GET    | `/api/recipes`           | Retrieve all recipes       | -                                                                            |
| GET    | `/api/recipes/:id`       | Retrieve a recipe by ID    | -                                                                            |
| PUT    | `/api/recipes/:id`       | Update a recipe by ID      | `{ "title": "Updated Pasta" }`                                               |
| DELETE | `/api/recipes/:id`       | Delete a recipe by ID      | -                                                                            |

Postman Collection URL: [Access Collection](https://www.postman.com/)

Base URL:

http://localhost:5000/api/recipes

1. Create a Recipe

POST /

Request Body:

{
  "title": "Pasta",
  "description": "Delicious Italian pasta",
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
  "instructions": "Boil pasta, add sauce, and top with cheese."
}

Response:

{
  "_id": "645d1234abcd567890ef1234",
  "title": "Pasta",
  "description": "Delicious Italian pasta",
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
  "instructions": "Boil pasta, add sauce, and top with cheese.",
  "createdAt": "2025-05-19T12:00:00.000Z",
  "__v": 0
}

2. Get All Recipes

GET /

Response:

[
  {
    "_id": "645d1234abcd567890ef1234",
    "title": "Pasta",
    "description": "Delicious Italian pasta",
    "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
    "instructions": "Boil pasta, add sauce, and top with cheese.",
    "createdAt": "2025-05-19T12:00:00.000Z",
    "__v": 0
  }
]

3. Get a Recipe by ID

GET /:id

Response:

{
  "_id": "645d1234abcd567890ef1234",
  "title": "Pasta",
  "description": "Delicious Italian pasta",
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
  "instructions": "Boil pasta, add sauce, and top with cheese.",
  "createdAt": "2025-05-19T12:00:00.000Z",
  "__v": 0
}

4. Update a Recipe by ID

PUT /:id

Request Body:

{
  "title": "Updated Pasta",
  "description": "Delicious Italian pasta with extra cheese",
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese", "Basil"],
  "instructions": "Boil pasta, add sauce, and top with extra cheese and basil."
}

Response:

{
  "_id": "645d1234abcd567890ef1234",
  "title": "Updated Pasta",
  "description": "Delicious Italian pasta with extra cheese",
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese", "Basil"],
  "instructions": "Boil pasta, add sauce, and top with extra cheese and basil.",
  "createdAt": "2025-05-19T12:00:00.000Z",
  "__v": 0
}

5. Delete a Recipe by ID

DELETE /:id

Response:

{
  "message": "Recipe deleted"
}

CSS for Views

CSS for views is located in the public/css/styles.css file. Modify it to customize the appearance of the web pages.

## Deployment

### GitHub
1. Create a repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <repository_url>
   git push -u origin main
   ```

### Render Deployment
1. Log in to [Render](https://render.com/).
2. Create a new Web Service.
3. Connect your GitHub repository.
4. Set up the build command: `npm install`.
5. Set up the start command: `npm start`.
6. Add the `MONGO_URI` environment variable in Render's settings.
7. Deploy and get the live URL.

---

## Screenshots

- **Landing Page**:
  ![Landing Page](./screenshots/landing-page.png)

- **Recipes List**:
  ![Recipes List](./screenshots/recipes-list.png)

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy Coding!
