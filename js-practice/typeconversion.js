
/*let score="33"
console.log( typeof score);

let valueinnumber = Number(score)
console.log(typeof valueinnumber);*/

/*let score=null
console.log( typeof score);

let valueinnumber = Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber);*/ 

// when you keep boolean it comes output as  0or1 
// for undifeined its NaN
// when u put string in and try to covert into number its output is NaN
// when u convert 1 number to bollean its output is true same for false 
// if its empty then its false
// if its string its true


/*************operations********/

let value =3
let newValue=-value
//console.log(newValue);

//console.log(+true)
// +true value is 1 
/****************summary********************* */

// primative data types 

// 7 types : strings ,number, boolean ,null ,undefined,bigint,symbol

// refrence (non-premative): array, object, functions


// stack (premative)  heap (non-premative)

// stack 
let MyUserName ="PaavanSriSai"

let AnotherName= MyUserName
AnotherName="Roy"

console.log(AnotherName);

//heap
let USerOne= {
    emialid:"Paavan@gmail.com"
    
}
let UserTwo=USerOne

UserTwo.emialid="some@gmail.com"
console.log(USerOne.emialid);
console.log(UserTwo.emialid);
