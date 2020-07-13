const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.set('views', `${__dirname}/public`)
app.set('view engin', 'html')
app.engine('html', require('ejs').renderFile)
app.use(express.static('src', {
    extensicons: ['html']
}))



app.get('/', (req, res) => {
    res.render('index');
})
app.post('/api/users', (req, res) => {
    const users = [{
        name: 'haahaa',
        age: 1
    }];
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})