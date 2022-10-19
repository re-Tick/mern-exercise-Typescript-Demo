const mongoose = require('mongoose');
const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});
// exerciseSchema.pre("find", (next) => {
  
// })

// exerciseSchema.post("find", (next) => {

// })

// asyncLocalStorage.run("context", ()=>{
//   console.log("kk")
//   console.log(asyncLocalStorage.getStore())

//   exerciseSchema.pre("find", (next) => {
//     console.log(asyncLocalStorage.getStore())
//     next()
//   })

//   // exerciseSchema.pre("find", (next) => {
//   //   this._context = asyncLocalStorage.getStore()
//   // })
  
//   // exerciseSchema.post("find", (next) => {
//   //   console.log(this._context)
//   // })
// })

console.log(asyncLocalStorage.getStore())

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;