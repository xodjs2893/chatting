const http = require('http');

const PORT = 5000;

//서버생성
http.createServer((req, res) => {
    if (req.url === '/api/users') {
        const users = [{
                name: "taeeon",
                age: 20
            },
            {
                name: "feelgood",
                age: 14
            },
            {
                name: "woochul",
                age: 35
            },
            {
                name: "taegill",
                age: 34
            },
            {
                name: "hamama",
                age: 13
            },
            {
                name: "sumin",
                age: 100
            },
        ];
        res.write(JSON.stringify(users))
    } else if (req.url === '/api/todos') {
        //todo 관력 내용을 response 해주는 api
        const todo = [{
            name: "haha1",
            age: 20
        },
        {
            name: "haha2",
            age: 14
        },
        {
            name: "haha3",
            age: 35
        },
        {
            name: "haha4",
            age: 34
        },
        {
            name: "haha5",
            age: 13
        },
        {
            name: "haha6",
            age: 100
        },
    ];
        res.write(JSON.stringify(todo))
    }else {
        res.write('<h1>hello node js</h1>')
    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})