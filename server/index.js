import express from 'express'
import { getImages } from './utils.js'
const app = express()
const port = 8080

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/:keyword', async (req, res) => {
  const { keyword } = req.params
  const result = await getImages(keyword)

  res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})