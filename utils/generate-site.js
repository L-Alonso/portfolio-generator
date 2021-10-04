const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject ) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new promises((resolve, reject)=>{
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'success!'
            });
        });
    });
}

module.exports ={writeFile, copyFile};