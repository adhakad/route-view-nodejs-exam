var express = require('express');
var router = express.Router();
var classModule=require('../modules/class');
var questionModule=require('../modules/questions');
var optionModule=require('../modules/options');
const { check, validationResult } = require('express-validator');
router.use(express.static('public'))

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',function(req, res) {
  var check=classModule.find({});
      check.exec((err, data)=>{
        res.render('dashboard', { title: 'TechBista Solutions',data:data});
      });
});

router.get('/get/:ids',function(req, res) {
  req.session.ids = req.params.ids;
  res.send({msg:'/exam'});
});

router.get('/exam',function(req, res) {
  res.render('exam', { title: 'TechBista Solutions'});
});

router.get('/data/:sn',function(req, res, next) {
  var sn = req.params.sn;
  var eid =req.session.ids;
  var que=questionModule.findOne({eid:eid,sn:sn});
  que.exec((err,data)=>{
    var qns = data.qns;
    var qid = data.qid;
    var one = 1;var two = 2;var three = 3;var four = 4;
    var option1 = optionModule.findOne({eid:eid,sn:sn,ans_sn:one});
    option1.exec((err,optData1)=>{
      var option2 = optionModule.findOne({eid:eid,sn:sn,ans_sn:two});
      option2.exec((err,optData2)=>{
        var option3 = optionModule.findOne({eid:eid,sn:sn,ans_sn:three});
        option3.exec((err,optData3)=>{
          var option4 = optionModule.findOne({eid:eid,sn:sn,ans_sn:four});
          option4.exec((err,optData4)=>{
            if(err){
              res.send({msg:'error'});
            }else{
              var opt1 = optData1.option;
              var opt2 = optData2.option;
              var opt3 = optData3.option;
              var opt4 = optData4.option;
              res.send({msg:'success',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4});
            }         
          })        
        })
      })
    })          
  }); 
});

router.get('/datas/:sn',function(req, res, next) {
  var sn = req.params.sn;
  var eid =req.session.ids;
  var que=questionModule.findOne({eid:eid,sn:sn});
  que.exec((err,data)=>{
    var qns = data.qns;
    //var qid = data.qid;
    var one = 1;var two = 2;var three = 3;var four = 4;
    var option1 = optionModule.findOne({eid:eid,sn:sn,ans_sn:one});
    option1.exec((err,optData1)=>{
      var option2 = optionModule.findOne({eid:eid,sn:sn,ans_sn:two});
      option2.exec((err,optData2)=>{
        var option3 = optionModule.findOne({eid:eid,sn:sn,ans_sn:three});
        option3.exec((err,optData3)=>{
          var option4 = optionModule.findOne({eid:eid,sn:sn,ans_sn:four});
          option4.exec((err,optData4)=>{
            if(err){
              res.send({msg:'error'});
            }else{
              var opt1 = optData1.option;
              var opt2 = optData2.option;
              var opt3 = optData3.option;
              var opt4 = optData4.option;
              res.send({msg:'yes',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4});
            }         
          })        
        })
      })
    })          
  }); 
});

router.get('/datass/:sn',function(req, res, next) {
  var sn = req.params.sn;
  var eid =req.session.ids;
  var que=questionModule.findOne({eid:eid,sn:sn});
  que.exec((err,data)=>{
    var qns = data.qns;
    //var qid = data.qid;
    var one = 1;var two = 2;var three = 3;var four = 4;
    var option1 = optionModule.findOne({eid:eid,sn:sn,ans_sn:one});
    option1.exec((err,optData1)=>{
      var option2 = optionModule.findOne({eid:eid,sn:sn,ans_sn:two});
      option2.exec((err,optData2)=>{
        var option3 = optionModule.findOne({eid:eid,sn:sn,ans_sn:three});
        option3.exec((err,optData3)=>{
          var option4 = optionModule.findOne({eid:eid,sn:sn,ans_sn:four});
          option4.exec((err,optData4)=>{
            if(err){
              res.send({msg:'error'});
            }else{
              var opt1 = optData1.option;
              var opt2 = optData2.option;
              var opt3 = optData3.option;
              var opt4 = optData4.option;
              res.send({msg:'yess',sn:sn,qns:qns,opt1:opt1,opt2:opt2,opt3:opt3,opt4:opt4});
            }         
          })        
        })
      })
    })          
  }); 
});

module.exports = router;