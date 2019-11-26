const mahasiswa=require('express')()
const mahasiswacontroler=require('../controler/mahasiswa')

mahasiswa.post('/simpan',(req,res,)=>{
    mahasiswacontroler.simpanmahasiswa(req.body)
    .then(result=>{
        res.json(result)
    }).catch(err =>{
        res.json(err)
    })
})

module.exports=mahasiswa