const mongoose = require('mongoose')
const People = mongoose.model('People')

module.exports = {
  index: (req, res) =>{
    console.log('running index function')
    var people = People.find({}, (err, data) => {
      if(err){
        res.json(err)
        return
      }
      res.json(data)
    })
  },
  new: (req,res) =>{
    console.log('adding ', req.params.name)
    var person = new People({name: req.params.name})
    person.save(err=>{
      if(err){
        console.log('something went wrong with new')
      } else{
        console.log("succesfully added person")
        res.redirect('/')
      }
    })
  },

  remove: (req,res) =>{

  },

  name: (req, res) => {

  },
}
