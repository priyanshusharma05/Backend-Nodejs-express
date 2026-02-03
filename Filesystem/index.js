const fs=require('fs');
const path=require('path');

const loc=path.join(__dirname,'data','abc.txt');

fs.readFile(loc,'utf8',(err,data)=>{
    if(err){
        console.error('Error reading file:',err);
        return;
    }
    console.log('File content:',data);
});