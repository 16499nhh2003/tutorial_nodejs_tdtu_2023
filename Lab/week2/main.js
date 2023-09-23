var postHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="get" action="/result">
        <div>
            <label>số hạng 1</label>
            <input type="text" name="number1">
        </div>
        <div>
            <label>số hạng 2</label>
            <input type="text" name="number2">
        </div>
        <div>
            <label>Phép tính</label>
            <select name="op">
                <option disabled selected value>Chọn phép tính</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value=":">:</option>
            </select>
        </div>
        <div>
            <button type="submit">Tính</button>
        </div>
    </form>    
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
            res.end(postHTML);
            break;
        case '/result':
            const query = parsedUrl.query;
            // console.log(query);
            let a = parseInt(query.number1);
            let b = parseInt(query.number2);
            let op = query.op;
            if (!op) {
                res.end('Bạn chưa chọn phép toán')
                return;
            }

            if (op === ':' && b === 0) {
                res.end('Không thể chia 0')
                return;
            }
            let rs;
            switch (op) {
                case '+': {
                    rs = a + b;
                    break;
                }
                case '-': {
                    rs = a - b;
                    break;
                }
                case '*': {
                    rs = a * b;
                    break;
                }
                case '/': {
                    rs = a / b;
                    break;
                }
            }
            res.end(`${a} ${op} ${b} = ${rs}`)
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
