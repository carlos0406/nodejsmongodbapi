import app from 'app'
app.get('/', (req, res) => {
  return res.json({ message: 'oi tudo bem?' })
})
app.listen(3333)
