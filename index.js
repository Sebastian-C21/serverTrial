const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/api/customers', (req,res) => {
    res.send(
        [
            {
                id: '1',
                text: 'blabla',
                image: 'img.jpg',
                price: 100
            },
            {
                id: '2',
                text: 'blabla2',
                image: 'img2.jpg',
                price: 200
            },
            {
                id: '3',
                text: 'blabla',
                image: 'img.jpg',
                price: 100
            },
            {
                id: '4',
                text: 'blabla2',
                image: 'img2.jpg',
                price: 200
            },
            {
                id: '5',
                text: 'blabla',
                image: 'img.jpg',
                price: 100
            },
            {
                id: '6',
                text: 'blabla2',
                image: 'img2.jpg',
                price: 200
            }
        ]
    );
});

app.listen(
    4600,
    () => console.log('its alive')
    );