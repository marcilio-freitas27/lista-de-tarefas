const express = require('express')
const fs = require('fs')

const app = express()

app.use("/", express.static('./'));
const file = fs.readFileSync('index.html').toString()
app.get('/',(req, res) => {
    res.status(200).send(file)
})

app.listen(5555,()=>{
    console.log('listening on port http://localhost:5555')
})