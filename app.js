require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Landing page route
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to Recipe Manager' });
});

// Recipes list page route
app.get('/recipes', async (req, res) => {
    try {
        const Recipe = require('./models/Recipe');
        const recipes = await Recipe.find();
        res.render('recipes', { recipes });
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
});

// API routes
app.use('/api/recipes', recipeRoutes);

// Catch-all route for 404 errors
app.use((req, res, next) => {
    res.status(404).render('error', { message: 'Page not found!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
