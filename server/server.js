const express = require('express');

const app = express();

const port = 3000;
const hostname = '127.0.0.1';

app.use('/', express.static('../client/dist'));
app.use(express.json());

app.get('/error', (req, res) => {
    res.status(404).send('Error');
})
.use('/api/v1/workouts', require('./controllers/workouts'))


app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '../client/dist' });
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status( err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong',
        status: err.httpCode ?? 500
    });
})

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});