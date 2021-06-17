const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,"text/plain");
    res.write("ok\n");
    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>console.log(`running server at http://localhost:${PORT}`));
