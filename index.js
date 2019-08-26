const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
// const chalk = require('chalk');

//including the json file 
var fs=require('fs');
var readJson =fs.readFileSync('data.json', 'utf8');
var data=JSON.parse(readJson);

//include the lodash
const _ = require('lodash');

// app.use(bodyparser.json());
// app.use(chalk);
// app.use(chokidar);

   app.get('/', (req, res)=>{
      res.send(easyQuestion)
   });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




 // getting all the easy questions
      var easyQuestion = _.pullAllBy(data, [{ 'difficulty': 'M' },{'difficulty': 'H'}], 'difficulty');
         for (var i in easyQuestion){
            console.log(easyQuestion[i].question);
         }

   
