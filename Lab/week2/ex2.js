var frm = `<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

    <h2>Đăng nhập </h2>
    <form action="/login" method="post">
        <div>
            <label for="email">Email:</label>
            <div>
                <input type="text" name="email" id="email" placeholder="Enter Email">
            </div>
        </div>
        <div>
            <label for="pwd">Password :</label>
            <div>
                <input type="password" name="pwd" id="pwd" placeholder="Enter Password">
            </div>
        </div>
        <div class="mt-2">
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </div>
    </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>`

const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    switch (path) {
        case '/':
            res.end(frm);
            break;
        case '/login':
            if (req.method === 'POST') {
                let postData = '';
                req.on('data', (chunk) => {
                    // Handle each chunk of data here
                    postData += chunk.toString();
                });

                req.on('end', () => {
                    // Once all data has been received, you can process it
                    const parsedUrl = url.parse('test?' + postData, true);
                    // Access the values
                    const email = parsedUrl.query.email;
                    const pwd = parsedUrl.query.pwd;
                    if (email === 'admin' && pwd === 'admin') {
                        res.end('Đăng nhập thành công');
                        return;
                    }
                    res.end('Mật khẩu không hợp lệ');
                });
            }
            else {
                res.end('Phương thức GET không hỗ trợ.');
            }
            break;
        default:
            res.end('Đường dẫn không hợp lệ');
            break;
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
