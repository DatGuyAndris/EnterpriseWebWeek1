const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Set the view engine to use HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', __dirname)

// Set the public folder to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the HTML page
app.get('/', (req, res) => {
  res.render('myWebPage');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
