const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Ensure the correct path to 'views'

// Example route
app.get('/', (req, res) => {
  res.render('index');
});


// Example route
app.get('/about', (req, res) => {

  const data = {
    title: 'My EJS Page',
    message: 'Hello, this is a message from the server!',
    items: ['Apple', 'Banana', 'Cherry']
  };
  res.render('about', { data });
  });

  app.get('/blog' , (req,res) => {
    res.render('blog');

  });
  
  app.get('/menu' , (req,res) => {
    res.render('menu');

  });

  app.get('/blog2' , (req,res) => {
       res.render('blog2');

  });

  app.get('/blog3' ,(req ,res) => {
         res.render('blog3');
  });

  app.get('/blog4' ,(req ,res) => {
    res.render('blog4');
});

app.get('/blog5' ,(req,res) => {
    res.render('blog5');

});

app.get('/blogsingle' ,(req,res) =>{
     res.render('blogsingle');

});

app.get('/blogsingle2' ,(req,res) => {
      res.render('blogsingle2');
});

app.get('/blogsingle3' ,(req,res) => {
     res.render('blogsingle3');

});

app.get('/contact' ,(req,res) => {
    res.render('contact');

});

app.get('/error' , (req,res) => {
    res.render('error');
    console.log('tt');

});

app.get('/shortcodes',(req,res) => {
     res.render('shortcodes');

});
  

 
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
