const server =require('express')()
const bodyparser =require('body-parser')
const mongoose=require ('mongoose')
const port =5000
const mongoURI='mongodb://localhost:port:27017/dblatihan'
mongoose.connect (mongoURI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log ('connect to db success')
})
.catch(err=>{
  console.log ('error : ' +err)
})

server.use (bodyparser.json({
  extended:'true',
  limit:'50 mb'
}))

server.use (bodyparser.urlencoded({
  extended:'true',
  limit:'50 mb'
}))

server.use('/mahasiswa',require('./routers/mahasiswa'))
server.use('/matakuliah',require('./routers/matakuliah'))

server.listen(port,function(){
  console.log('server started on port'+port)
})