
// *********** Stack and Heap memory in javascript *******************

// stack ( primitive mai stack use hoti hai ) 
// heap ( non primitive type mai heap memory use hoti hai )

let myInstName = "CodeByVidit" ;  
let anotherName = myInstName ;  

anotherName = "VisonCode"

console.log(anotherName) 
console.log(myInstName)  


let userOne = { 
    email : "user@google.com" ,  
    upi :    "user@upi"
} 

// ye jo hai userone ye heap hai and ye jata hai heap mai ye data 
// and stack mai jo jayega vo jayega : userone => mtlb jab koi userone pr click krega to vo heap mai chala jeyga and usko vo details mil jayegi 


let userTwo = userOne 

userTwo.email = "vidit@google.com"


console.log(userOne.email)
console.log(userTwo.email) 


/* jab ham kuch stack ke andar dalte hai to uska kuch hame copy hi milta hai and  ; agar ham kuch heap ke andar dalte hai to hame uska kuch reference hi milta hai */ 