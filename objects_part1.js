//  singleton 

// objects literals


const sym = Symbol("key1")


const jsUser = { 

    name:"vidit" ,  
    name2:"harry",
    age:19,  
    [sym] : "key1", 
    Gender :"male" , 
    DOB : 28/12/2006 , 
    Email : "vidit@google.com" , 
    IsLoggedIn : false , 
    LastLoginDays : ["Monday", "saturday"]

} 
 // yhi hai objects ke andar and isse jyada aur kuch nhi hota hai  

//  Ham ACCESS KESE KRTE HAI ? 


// console.log(jsUser["Email"]);  //hame string mai likhna hai aise 
 
// console.log( jsUser["name"]);
// console.log( typeof jsUser["name"]);
// console.log(jsUser[sym]);
// console.log(typeof jsUser[sym]); 

jsUser.Email = "vidit@google.com"
// Object.freeze(jsUser)

// :- isse ye hota hai ki hamne ye freeze kr diya hai object ko and mai isse aage agar phir mail likhne ki kosis krunga to tab bhi ye iss freeze wali ko hi show kregi  to isiliye ye [ OBJECT FREEZE USE HOTA HAI ] 


jsUser.Email = "vidit@ai.com"
// console.log(jsUser); 
 


jsUser.greetings = function(){ 
    console.log(` Hello js users , ${this.name} ` ) 
    //Jab bhi jsUser.greetings() call hoga, ye message print hoga

}   
 



jsUser.greetings2 = function(){ 
    console.log(`Hello second js user  , ${this.name2}`) 
// ye ham backtic ka use krte hai kisi reference ko object mai use krne ke liye

}  

// sirf greetings function ko access kar rahe hain.
console.log(jsUser.greetings()); 
console.log(jsUser.greetings2()); 

// aab jo bhi name hai uss object ke andar usko refer krna hai : to uske liye ham use krta hai string se backtic mai and ::-- isko bolte hai string intopolation 

//agar hame same object ko reference krna hai to ham use krte hai [ THIS ] , and this ke baad jab ham dot lagayenge to uss object ke andar jitni properties hai vo hame mil jayegi 






