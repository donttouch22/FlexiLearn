const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:4200'
  };

app.use(cors(corsOptions));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/api/message', (req, res) => {
  console.log('GET request received');
    res.json({ message: 
            'Hello Folks from the Express server!' });
});