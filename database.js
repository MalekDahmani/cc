let mongoose = require('mongoose');
let contact = require ('./contact')
const server = 'localhost:3000'; 
const database = 'myDB';      
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()




const msg = new contact({
    fullName: "Alex Anderson",
    email:"Alex-Anderson@gmail.com",
    phoneNumber: 2255889993,
    birthdate: 1990
})
msg.save()
  .then(doc=>{
    console.log(doc)
  })
  .catch(err=>{
    console.error(err)
  })



const newcontacts= [
    {
        fullName: "lola fricks",
        email:"lola fricks@gmail.com",
        phoneNumber: 225588546884,
        birthdate: 1995,
    },
    {
        fullName: "Ronney Dias",
        email:"Ronney Dias@gmail.com",
        phoneNumber: 586655889993,
        birthdate: 1980,
    },
    {
        fullName: "Adam crouch",
        email:"AdamCrouch@gmail.com",
        phoneNumber: 2255889993,
        birthdate: 1975,
    }
]

contact.create(newcontacts)
.then(doc=>{
    console.log(doc)
})
.catch(err=>{
    console.log(err)
})
