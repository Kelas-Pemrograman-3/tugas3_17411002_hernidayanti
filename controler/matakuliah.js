const matakuliahmodel=require('../models/matakuliah')

exports.simpanmatakuliah=(data)=>
new Promise((resolve,reject)=>{
    matakuliahmodel.create(data)
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