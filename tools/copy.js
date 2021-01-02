const fs = require('fs-extra')
const path = require('path')

const out = `${process.argv.splice(2)[0]}/android2weixin`
const cwd = process.cwd()
/*
function copy(folder){
    if(!fs.existsSync(path.join(cwd, out,folder))){
        fs.mkdirSync( path.join(cwd, out,folder))
    }
    const list = fs.readdirSync(path.join(cwd, 'src',folder))
    list.forEach(file => {
        const uri = `${folder}/${file}`
        const stat = fs.lstatSync(path.join(cwd, 'src', uri))
        if (stat.isDirectory()){
            copy(uri)
        } else if(file.endsWith('.js') ||file.endsWith('.wxs')  ){
            const readable = fs.createReadStream( `${cwd}/src/${uri}` );
            const writable = fs.createWriteStream( `${cwd}/${out}/${uri}` ); 
            readable.pipe( writable );  
        }
    })
}
copy('java')
copy('js')
*/