const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// / �ɃA�N�Z�X�����Ƃ��̊m�F�p
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// API�G���h�|�C���g
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World from server!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
