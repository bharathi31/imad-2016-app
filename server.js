var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    `article-one :{
        title: 'Article One',
        heading: 'Article ONE',
        date: '11/10/2016',
        content: `
                <p>This is my first try in article simple file. Pleae check.</p>
                <p>Happy to learn from imad</p>
                <p>Hope i learn all these</p>`
    },
    
   `article-two :{
        title: 'Article Two',
        heading: 'Article TWO',
        date: '11/10/2016',
        content: `
                <p>This is my first try in article simple second file. Pleae check.</p>
                <p>Happy to learn from imad</p>
                <p>Second file success</p>`
    },
    
   `article-three:{
        title: 'Article Three',
        heading: 'Article THREE',
        date: '11/10/2016',
        content: `
                <p>This is my first try in article simple Third file. Pleae check.</p>
                <p>Happy to learn from imad</p>
                <p>Third file success</p>`
    }
};

function createtemplate(data){
 
 var title = data.title;
 var heading = data.heading;
 var content = data.content;
 var date = data.date;
 
    var htmltemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name ="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
        <body>
            <div class='container'>
                <div>
                    <a href="/">Home</a>
                </div>
                <h1>
                    ${heading}
                </h1>
                <div>
                   ${date}
                </div>
                <p>
                    ${content}
                </p>
            </div>
        </body>
    </html>
    `;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
   res.send(createtemplate(articleTwo));
});

app.get('/article-three',function(req,res){
   res.send(createtemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
