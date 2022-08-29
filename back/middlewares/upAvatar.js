//Require multer
const multer = require('multer')
//Require path
const path = require('path');
const storage = multer.diskStorage({ //To save img
    destination: function (req, file, cb) {
      cb(null,'public/users') //img destination from edit form
    },/* path.join(__dirname,'..','..','front','src','img','users') */
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) 
    }
  })

const upload =  multer({ storage: storage }) 

module.exports = upload