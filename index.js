const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = http.createServer(app).listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});