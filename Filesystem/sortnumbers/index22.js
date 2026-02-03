// const { rejects } = require('assert');
// const fs=require('fs');
// const path=require('path');

// const loc1=path.join(__dirname,'data','input1.txt');
// const loc2=path.join(__dirname,'data','input2.txt');

// fs.readFile(loc1,'utf8',(err,data)=>{
//     if(err){
//         console.error('Error reading file:',err);
//         return;
//     }
//     console.log('File content:',data);
// });

// arr1 = data.trim().split(/\s+/).map(Number);

// fs.readFile(loc2,'utf8',(err,data)=>{
//     if(err){
//         console.error('Error reading file:',err);
//         return;
//     }
//     console.log('File content:',data);
// });

// arr2 = data.trim().split(/\s+/).map(Number);


const fs = require('fs');
const path = require('path');

function getData(filename) {
  return new Promise((resolve, reject) => {
    const loc = path.join(__dirname, 'data', filename);

    fs.readFile(loc, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


getData('input1.txt')
    .then((x)=>{
        getData('input2.txt')
            .then((y)=>{
                let data1=x.split(' ');
                let data2=y.split(' ');
                let finaldata=[...data1,...data2];
                finaldata.sort((a,b)=>a-b);

                let outputdata=finaldata.join(' ');
                console.log(outputdata);
                pathloc=path.join(__dirname,'data','output.txt');
                fs.writeFile(pathloc,outputdata,(err)=>{
                    if(err){
                        console.error('Error writing file:',err);
                        return;
                    }else{
                        console.log('File written successfully');
                    }
                });
            });
    });