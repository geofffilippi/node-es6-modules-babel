import { readFile } from 'fs';

readFile('src/index.js', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Input file: \n" + data.toString());
});
