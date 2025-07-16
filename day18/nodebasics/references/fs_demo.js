const fs = require('fs')
const path = require('path')

//Create Folder
// fs.mkdir(path.join(__dirname,'test'),function(err){
//     if(err) console.log(err)
//     console.log("Folder Created")
// })

//Create and write to file
// fs.writeFile(path.join(__dirname,'test','hell.txt'),'Hello IGDTUW Fam',function(err){
//     if(err) console.log(err)
//         console.log("File CreateDD!!")
// })

//Read the File
// fs.readFile(path.join(__dirname,'test','hell.txt'),'utf-8',function(err,data){
//     if(err) console.log(err)
//         console.log(data)
// })

//Rename the File
fs.rename(path.join(__dirname,'test','hell.txt'),path.join(__dirname,'test','widow.txt'),function(err){
    if(err) console.log(err)
        console.log("File Renamed")
})
