import app from './app'
app.listen(process.env.SERVER_PORT || 3332, () => {
  console.log('listening')
})
