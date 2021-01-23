const express = require('express');
const app = express();
app.set('views', __dirname + '/views');
app.use('/public', express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res) =>
{
    res.render('index');
    console.log("redirecting to index page");
});
app.listen(2000,()=>
{
    console.log("listening");
});