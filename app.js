const express = require('express');
const { Socket } = require('dgram');
const app = express();
const PORT = process.env.PORT || 5000;
const http = require('http').Server(app)
const io = require('socket.io')(http)



app.set('views', `${__dirname}/public`)
app.set('view engin', 'html')
app.engine('html', require('ejs').renderFile)
app.use(express.static('public', {
    extensicons: ['html']
}))

io.on('connection',function(socket){
    console.log('User connected...');
    socket.on('chatting',(data)=>{
        io.sockets.emit('chatting',data)
    })
})


app.get('/', (req, res) => {
    console.log(__dirname);
    res.render('index');
})
app.post('/api/users', (req, res) => {
    const users = [{
        name: 'haahaa',
        age: 1
    }];
    res.send(users)
})

// app.listen(PORT, () => {
//     console.log(`server is running on ${PORT}`);
// })
http.listen(PORT,()=>console.log(`listening on localhost:${PORT}`));