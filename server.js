const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (path.extname(filePath) === '.css') {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

app.listen(3000, () => {
    console.log('Server started on port 3000');
    console.log(`Go to: http://localhost:3000`);
});
