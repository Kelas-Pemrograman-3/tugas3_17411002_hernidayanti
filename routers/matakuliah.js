const matakuliah=require('express')()
const matakuliahcontroler=require('../router/matakuliah')

matakuliah.post('/simpan',(req,res,)=>{
    matakuliahcontroler.simpanmatakuliah(req.body)
    .then(result=>{
        res.json(result)
    }).catch(err =>{
        res.json(err)
    })
})

module.exports=matakuliah