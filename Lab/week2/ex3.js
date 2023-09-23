const Students = [
    { id: 1, name: 'a', email: 'a@gmail.com' },
    { id: 2, name: 'b', email: 'b@gmail.com' },
    { id: 3, name: 'c', email: 'c@gmail.com' },
    { id: 4, name: 'd', email: 'd@gmail.com' }
]

const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname
    const method = req.method
    try {
        const id = parseInt(path.split('/').pop())
        if (path.startsWith('/students') && !id) {
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'application/json ;charset=utf-8' })
                res.end(JSON.stringify(Students));
                return;
            }
            if (method === 'POST') {
                let body = '';
                req.on('data', (chunk) => {
                    // Handle each chunk of data here
                    body += chunk.toString();
                });

                req.on('end', () => {
                    // Once all data has been received, you can process it
                    const data = JSON.parse(body);
                    const name = data.name
                    Students.forEach(tour => {
                        if (Students.name === name) {
                            res.end(JSON.stringify(json({ code: 0, message: "Name existed" })))
                        }
                    })
                    const id = Students.reduce((max, obj) => {
                        return obj.id > max ? obj.id : max
                    }, Students[0].id) + 1;

                    Students.push({
                        id: id,
                        name: data.name,
                        email: data.email
                    })

                    res.writeHead(200, { 'Content-Type': 'application/json ;charset=utf-8' })
                    res.end(JSON.stringify({ code: 1, message: "Successfull", data: Students }))
                    return;
                })
            }
        }
        if (path.startsWith('/students') && id) {
            if (method === 'GET') {
                const p = Students.find(p => p.id === id)
                if (!p) {
                    res.writeHead(404, { 'Content-Type': 'application/json ;charset=utf-8' })
                    res.end(JSON.stringify({ error: 'No such tours exist' }))
                }
                res.end(JSON.stringify({ code: 1, message: "Successfull", data: p }))
            }
            else if (method === 'PUT') {
                let body = '';
                req.on('data', (chunk) => {
                    // Handle each chunk of data here
                    body += chunk.toString();
                });
                req.on('end', () => {
                    // Once all data has been received, you can process it
                    const data = JSON.parse(body);
                    // console.log(data);
                    const p = Students.find(p => p.id === id)
                    if (!p)
                        return res.end(JSON.stringify({ error: 'No such tours exist' }))

                    if (data.name)
                        p.name = data.name
                    if (data.email)
                        p.email = data.email
                    res.writeHead(200, { 'Content-Type': 'application/json ;charset=utf-8' })
                    return res.end(JSON.stringify({ code: 1, message: "Successfull", data: Students }))

                })
            }
            else if (method === 'DELETE') {
                const idx = Students.findIndex(tour => tour.id === id)
                if (idx < 0) {
                    return res.end(JSON.stringify({ error: 'error' }))
                }
                Students.splice(idx, 1)
                res.writeHead(200, { 'Content-Type': 'application/json ;charset=utf-8' })
                return res.end(JSON.stringify({ code: 1, message: "Successfull", data: Students }))
            }
            else {
                res.writeHead(404, { 'Content-Type': 'application/json ;charset=utf-8' })
                return res.end(JSON.stringify({ code: 0, message: "Not support other method" }))
            }
        }
    }
    catch (err) {
        res.writeHead(500, { 'Content-Type': 'html/text ;charset=utf-8' })
        res.end('Has Errors');
    }
})
const port = 8080;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

