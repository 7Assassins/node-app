const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello! It is running12345')
})

app.listen(8080, () => console.log('Server running on port 8080'))
