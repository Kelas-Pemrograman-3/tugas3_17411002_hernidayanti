const mahasiswamodel=require('../models/mahasiswa')

exports.simpanmahasiswa=(data)=>
new Promise((resolve,reject)=>{
    mahasiswamodel.create(data)
    .then (res => {
        resolve({
            error:false,
            pesan:'cie berhasil'
        })
    })
    .catch (()=>{
        reject ({
            error:true,
            pesan:'yahh gagal'
        })
    })
})