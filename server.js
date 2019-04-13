

const http = require('http');
const finalHandler=require('finalHandler')
const  Router   = require('router');
const fs= require('fs');
const port = 3000;


const router = Router();
router.get('/',  (req, res)=> {
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
 // res.end('Hello ')
 fs.readdir('./assets',(err,files)=>{
  if(err){
    res.statusCode=500;
    res.end('error happened')
  }
  else{ 
    res.setHeader('content-Type', 'application/json;charset=utf-8');
    res.end(JSON.stringify(files))
  }
 })
})
router.get('/:fileName',  (req, res)=> {

 fs.readFile(`./assets/${req.params.fileName}`,(err,fileBuffer)=>{
  if(err){
    res.statusCode=404;
    res.end('not found')
  }
  else{
    res.setHeader('content-Type',  'image/gif');
    res.end(fileBuffer)
  }
 })
})

const server = http.createServer((req, res) => {
 router(req,res,finalHandler(req,res));
});




server.listen(port,  () => {
  console.log(`Server running at http://localhost:${port}/`);
});  