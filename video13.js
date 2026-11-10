// Dates in objects  

// in js dates store in milliseconds 

// let myDate = new Date(); // ye hamne bana diya ek date ka object and u can say instant of date 
// console.log(myDate.toDateString()) // aise krke kafi methods hai iske  
// console.log(myDate.toISOString()) // aise krke kafi methods hai iske  
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString()) // isse sirf date milti hai jese ham copy mai likhte hai date 

// console.log(myDate.toJSON()) //iss bhi kuch to time ata hai pr phele year ati hai isme  

// console.log(myDate.toLocaleString()) ; // ye bhaut acha hai isse date ke sath time bhi ata hai ki kya time hora hai and kya date hai aaj  

// console.log(myDate.toLocaleTimeString()) // isse sirf time ata hai  

// console.log(typeof myDate); // isse pata chalta h ki ye kis trh ka type hai and mene upr bhi mention kra hua hai ki ye ek object hai  

// ******************** *************** month zero se start hote hai js ke andar 

// let Newdate = new Date(1997, 0 , 19 )
// console.log(Newdate.toDateString()); 


// let timeStamp = Date.now()    ;                           // ye time stamp use hota hai quiz mai and polls mai ki kisne kitni jaldi answer diya vha ham time stam ka use krte hai 
 
// console.log(timeStamp); 
// console.log(Newdate.getTime());  // isse bhi same timeStamp ki trh ek value ajyegi and phir usko compare krna hoga hame 

// console.log(Math.floor(Date.now()/1000)); // ye 1k se devide isiliye kra hai kyu vo millisecond ko second mai convert krne ke liye 
// console.log(Newdate.getMonth());

 
let newdate = new Date(); 
console.log(newdate.getMonth() +1 ) // +1 isiliye krte hai kuki value jo count ho vo zero se na ho isiliye  

console.log(newdate.getDay()); // isme getday ka mtlb week day milte hai 
// console.log(newdate.getFullYear() );  

// console.log(newdate.toString()) ;  
// console.log(newdate.toString()) ; 


