const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello World!'));\napp.listen(3000, () => console.log('Server running on port 3000'));
