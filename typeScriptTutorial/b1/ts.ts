// let a: number = 10;
// let b: string = "tung";
// let c: boolean = true;
// let ob:{
//   name: string,
//   age: number
// } = {
//   name: "tung",
//   age: 18
// }
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(ob)

//----------------interface---------------
// interface social{
//   facebook?:string,
//   zalo?:string
// }

// interface user{
//   name: string,
//   class: string,
//   age?: number //optional
//   social?: social
// }

// let oba:user ={
//   name:"tung",
//   class:"cn07",
//   social:{
//     facebook:"tung.com"
//   }
// }
// console.log(oba)

//----------------extend interface---------------
interface account{
  username: string
}

interface user extends account{
  cardId: string
}

interface admin extends account{
  roleId: string
}

let a:user={
  username: "tung",
  cardId: "034032"
}
console.log(a)