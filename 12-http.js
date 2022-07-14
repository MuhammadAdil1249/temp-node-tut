const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('This is our about section')
    }
    res.end(`
    <h1>OOPS!!</h1>
    <p>Can't find the page that you are looking for</p>
    <a href='/'>Back to  home page</a>`)

})
server.listen(5000) 