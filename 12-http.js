const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page ^(^_^)')
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
        return
    }
    res.end(`
        <p></p>
        <h1>OOOPS!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home </a></>
        `)
    return
})
server.listen(5001)

