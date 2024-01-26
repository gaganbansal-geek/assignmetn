const http = require("http");
const url=require("url")
const port = 8080;
const fs=require("fs")

const server = http.createServer(async(req, res) => {
   await handleRoutes(req, res);
});

async function handleRoutes(req, res) {

    const parsedUrl = url.parse(req.url, true); 

    const query = parsedUrl.query; 


    const {n,m}=query

    if (req.method === 'GET' && req.url.includes("data")) {

        fs.readFile(`Gagan_Ass_File/${n}.txt`, 'utf8', (err, data) => {
            if (err) {
                console.error(err,"error");
                res.end("File Not Found")
                return;
            }else{
                res.statusCode = 200;
 
                const lines = data.split('\n');
                if(n&&!m){
                    res.end(data)
                }else{
                    if(m>lines.length-1){
                        res.end("No Lines Found")
                    }
                    res.end(lines[m-1])
                }
            }
           
        

        })

    } else {
        res.statusCode = 404;
        res.end("May be you are doing Something Wrong");
    }
}

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});