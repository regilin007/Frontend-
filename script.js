// var day =function (a,b,c,d){
//     return(a*b*c*d)
// }
// console.log(day(23,4343,534,3));
// (function verr(a,b,c){
//     console.log(
//     a+b+c
//     );
// })();
// var marks = [35,98.37,83,36,34];
// var average =(marks) => {
//    let sum =0;
//  for(i=0;i<marks.length;i++){
//    sum+=marks[i];
   
   
//  }
//  let avg = sum/marks.length;
//  return avg;
// } 
// console.log (average(marks));

// foo=(array,n)=>{
// if(n===undefined){
//   return (array[0]);
// }
// else if (n<0){
//   return [];

// }
// return array.slice(0,3);
// }
// console.log(foo([6,8,5,3],3));
// var a =[0,1,2,3,4,5,6]
// var c=a.slice(-2,3);
// console.log(c);
// console.log(a.join(" ").split(" "));

// class Regii{
//     constructor(name,gender){
//         this.Name= name;
//         this.Gender =gender;
//     }
//     getname(){
//         return "the name is "+this.Name;
//     }
//     set changingname(changed){
//         this.Name= changed;
//     }
// }
// var details = new Regii("regilin","male");
//     var details1 = new Regii("suresh", "male");
//     console.log(details.getname());
//     details.changingname= "djhfidb";
//     console.log(details.getname());
// var arr =[{name:"john", marks:35},{name:"regii", marks:36},{name:"parvathi", marks:76}];
// // var output = arr.map((e)=>{
// //     e.marks=e.marks+10
// //     return e});
// // console.log(output);
// // var sq = [1,2,3,4,5];
// // for(i=0;i<sq.length;i++)
// // {
// //     if(sq[i]%2===0){
// //         console.log(sq[i]);
// //     }
    
// // }
// var out= arr.filter((e)=>
//     e.marks>=36
// );
// console.log(out);
// var names= out.map((res)=>res.name);
// console.log(names);
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload=function(){
//     var result = JSON.parse(request.response);
//     console.log(result);
//    var res= result.filter((ele)=>ele.name="Afganistan");
//    console.log(res);

// }