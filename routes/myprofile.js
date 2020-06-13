var express = require('express');//imports express js
var bodyParser = require('body-parser');//enable the express app to read the incoming body
var logger = require('morgan');//for logging all http request 
var methodOverride = require('method-override')//allows to use put and delete request
var cors = require('cors');
var mysql = require('mysql');//cross origin resource sharing enables ionic to communicate with server
var app = express();
var config = require('../config');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false   }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
const router  = express.Router();
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,

});
router.post("/disprofile",(req,res)=>{
    var userid = req.body.userid
    

    var sql= 'select * from users where (userid) = ("'+userid+'")';
    

 
    con.query(sql,(err,result)=>{
      
        if(err){
            console.log(err);
            
            res.json({
                success:false,
                status:400
            })
        }
        else{
            res.json(result)

            console.log(result);
        }
        
})
})
router.post("/updateprofile", (req, res) => {
    const name = req.body.name
    const email = req.body.em
    const phone = req.body.mob
    const reg = req.body.reg
    const batch = req.body.batch
    const dept = req.body.dept
    const course = req.body.course
    const year = req.body.year
    const userid = req.body.userid
    var sql = 'UPDATE users SET name  = ("' + name + '"), email =("' + email + '"), phone = ("' + phone + '"), regno = ("' + reg + '"), course = ("' + course + '"), dept = ("' + dept + '"), year = ("' + year + '"), batch = ("' + batch + '") WHERE userid = ("'+userid+'")';
    // console.log(username,password,age);
          con.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("uploaded");
                }
            })
    })


module.exports = router;