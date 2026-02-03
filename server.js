const http=require('http');

const path=require('path');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url=='/' && method=='GET'){
        res.end("This is Home Page");
    }
    else if(url=='/about' && method=='GET'){
        res.end("Programmed by Your daddy!!");
    }
    else if(url=='/contact' && method=='GET'){
        const filepath=path.join(__dirname,'note.txt');
        fs.createReadStream(filepath).pipe(res);
    }
    else{
        res.end("404 Page Not Found");
    }

})

const port=4000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})