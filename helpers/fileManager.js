const  fs = require('fs');

const name ='database/data.json';

const saveData = (data) => {
    fs.writeFileSync(name,JSONstringify(data));

}

const getData = () => {
      if( !fs.existsSync(name) ){
          return null;

      }

      const data =fs.readFileSync(name, { encoding:'utf8'});
      if(data){
           return JSON.parse (data);
      }
       return null;            
    
   

}
module.exports = {
    saveData
     
}
module.exports = {
    getData
}