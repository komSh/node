const express = require('express')
const app = express()
const port = 3000
const myRoutes = require("./routes/routes");

app.use('/myRoutes',myRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/about', (req, res) => {
//     res.send('about!')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
