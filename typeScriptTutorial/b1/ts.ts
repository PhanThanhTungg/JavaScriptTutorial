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

// ----------------extend interface---------------
// interface account{
//   username: string
// }

// interface user extends account{
//   cardId: string
// }

// interface admin extends account{
//   roleId: string
// }

// let a:user={
//   username: "tung",
//   cardId: "034032"
// }
// console.log(a)

// ----------------array---------------
// interface user{
//   account: string,
//   pw: string
// }
// let a:number[] = [1,2,3] // Mảng a chỉ có number, tương tự vs kiểu dl khác
// let b:(number|string)[] = [1,"2"] // Mảng b là kiểu number hoặc string
// const usera:user={
//   account: "123",
//   pw:"123"
// }
// let c:(user|number)[] = [1, usera]
// console.log(c)


// ----------------tuple---------------: Giống array nhưng số lượng phần tử được chỉ định trước
// let clock:[string, number, number, number]
// clock = ["clock1", 10,10,10]
// console.log(clock)
// clock = ["clock2", 20,20,20]
// console.log(clock)

// ----------------readonly---------------: Lần đầu tiên được phép gán, từ lần thứ 2 thì không
// interface user{
//   readonly name: string, age: number
// }
// let user1:user={
//   name:"tung",
//   age: 18
// }
// user1.name="tung1"//error

// ----------------function---------------
// function sum(a:number,b:number):number{
//   return a+b// tra ve number
// }

// const sum1 = function(a:number, b:number):number{
//   return a+b
// }

// const sum2 = (a:number = 1, b:number=3):number=>{ //default param tuong tu voi 2 ham tren
//   return a+b
// }

//rest param
// const sum3 = (...numbers:number[]):number=>{
//   const total = numbers.reduce((sum,item)=>sum+item,0)
//   return total
// }
// console.log(sum3(1,2,3))

// ----------------enum---------------
//vd1: không gán giá trị cho enum, mặc định 0,1,2....
// enum Status {
//   initial, //0
//   active, //1
//   inactive //2
// }
// const currentStatus: number = 1;
// console.log(Status.initial)
// switch(currentStatus){
//   case Status.initial:
//     console.log("initial")
//     break
//   case Status.active:
//     console.log("active")
//     break
//   case Status.inactive:
//     console.log("inactive")
//     break
// }

//vd2: có gán giá trị cho enum
// enum Status {
//   initial = "initialVal", 
//   active = "activeVal", 
//   inactive = "inactiveVal" 
// }
// const currentStatus: String = "initialVal";
// console.log(Status.initial)
// switch(currentStatus){
//   case Status.initial:
//     console.log("initial")
//     break
//   case Status.active:
//     console.log("active")
//     break
//   case Status.inactive:
//     console.log("inactive")
//     break
// }

// ----------------any---------------
//Thay đổi linh hoạt giá trị 1 biến như js
// let a:any = 1
// a = "123"
// console.log(a)

// ----------------unknown---------------
// Tương tự any nhưng an toàn hơn vì có kiểm tra dữ liệu trước khi thực hiện gì đó

// function returnLengthAny(a:any):number{
//   return a.length
// }
// console.log(returnLengthAny(1)) // Trả về undefined // không thông báo lỗi

// const returnLengthUnKnown = function(a:unknown):number{
//   if(typeof a == "string") return a.length
//   else return -1
// }
// console.log(returnLengthUnKnown(3))

// ----------------void---------------: khong co return

// ----------------generics---------------
//vd1: không có generics
// const reverseNumber = (a:number[]):number[] =>{
//   return a.reverse()
// }
// const reverseString = (a:string[]):string[] =>{
//   return a.reverse()
// }
// console.log(reverseNumber([1,2,3]))
// console.log(reverseString(['a','b','c']))
//vd2: có generics
// const reverse = <T>(a:T[]):T[] =>{
//   return a.reverse()
// }
// console.log(reverse([1,2,3])) // hieu T la number
// console.log(reverse(['a','b','c'])) // hieu T la string

// ----------------union type---------------
// interface user{
//   name: string,
//   class?: string | number,
//   status: "active"|"inactive" //union type
// } 

// let user:user={
//   name: "tung",
//   status:"active" // chi dc chon inactive hoac active
// }

// console.log(user)