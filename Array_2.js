// array part two :- 

const arr2 = [ 1,2,3,4,5] 
// jab ham console mai jake js likhte hai mtlb aray likhte hai to vha ek prototype dikhta hai  

const hero = ["thor" , "lucy" , "C-america"]

const dcHero = ["batman", "flash", "superman" ]

// hero.push(dcHero)
// console.log(hero);

// isse result ye hai ki array ke andr array agya hai 
// if need to access any specific element use this : 

// console.log(hero[3][0]); 

// isse ye hua hai ki hamne vo jo 3 element hai usme se phele wala alag nikal and ye index ke liye use hota hai vo to pata hi hai  

hero.concat(dcHero); 
// console.log(hero);
 

// concatinate krna ya ek const ko dusre const ke sath push krna ek hi baat hai result same ata hai  





//                 CONCEPT FOR CONCATINATE :-

//    #1 :- 
const allhero = hero.concat(dcHero)
// console.log(allhero)  
//    #2 :- 

let arr1 = [1,2,3,4]; 
let arr4 = [5,6,7,8]; 

let result = arr1.concat(arr4) ; 
console.log(result)
// ye concatinate jo hota hai vo array ke andar array nhi dalta hai vo ek line mai array ko merge krke answer de deta hai 

// u can see the output by to confirm the answer  




//                          # SPREAD METHOD :-

const newhero = [...hero , ...dcHero]
console.log(newhero)
// ye jyada helpful and most use hai kuki isme ham kitni vhi value de skte hai array ki concat mai sirf ek hi de skte hai 

// this is most used and helpful
 

//                   # FLAT METHOD :-

const arr5 = [1,23,4,4,5,6,7,8 ,[1,2,3,45,[1,2,3,4,]] ]
const realarr5 = arr5.flat(Infinity)
console.log(realarr5) 

// flat se ye hota hai ki array ke andar kitne hi array ho ye sabko ek hi array mai convert kr deta hai 






//                         # NEW CONCEPT :-

console.log(Array.from("vidit"))  
// isme ham jo bhi value denge vo isko ek array mai convert kr dega 

// ham isme object bhi de skte hai strings bhi de skte hai and vo isko array mai convert kr dega and ye achi cheez hai  ek 

console.log(Array.from({ name: "vidit"}))  ; // INTERVIEW POV ; 

// ye hame ek empty array deta hai ! kyu ?

// ANSWER : kuki ye isko directory convert nhi kr para hai keys : to hame isko bolna padega ki keys ka array banaun ya iski value ka array banaun 


