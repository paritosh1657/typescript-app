// let firstName = "fruit"

let firstName:string = "fruit"
let count:number= 0
let isLoading:boolean= true

let numbers:undefined= undefined
let age:null|string= null

const user:{name:string, age:number, id?:number}= {
  name:"paritosh",
  age: 24,
  id:1
}

// Array of strings
const fruits:string[]= ["banana", "orange", "mango"]
// Array of numbers
const num:number[]= [1, 2,4, 5]
const users=[{id: 1, name:""}, {id:2, name:""}]


// functions

// const sum=(a:number, b:number)=>{
//   return a+ b
// }
// sum(4, 5)


// const handleApiResponse= (payload:{userId:number}, callback:(a:number, b:number)=> number)=>{
//   callback(4, 5)
// }







// Interface in TS

// interface Person{
//   department:string
// }
// interface User extends Person{
//   name:string;
//   id: number,
//   getUser:()=>void
// }

// let data:User= {
//   name:"Paritosh",
//   id: 1,
//   getUser:()=>{

//   },
//   department:""
// }



// Types in type script

// type employee={
//   id:number,
//   name:string
// }

// type manager= {
//   department:string
// } &employee

// let employeewithmanager:manager= {
//   department:"A",
//   id:2,
//   name:""
// }