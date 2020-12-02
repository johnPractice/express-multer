const path = require('path');

const generateName =async(file)=>{
  return  file.fieldname + '-' + Date.now() +await path.extname(file.originalname)
};
module.exports=generateName;