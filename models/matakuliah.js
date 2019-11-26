const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const matakuliahSchema=newSchema({
    namamk:{
        type:String
    },
    jam:{
        type:String
    },
    ruang:{
        type:String
    },
    iddosen:{
        type:String
    },
    namadosen:{
        type:String
    }
})

module.exports=mongoose.model('matakuliah',matakuliahSchema)