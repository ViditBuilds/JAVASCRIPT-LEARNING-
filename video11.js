
// will wi study about string in this video 11 and it is very important 
// String => isko single quote and double se dono se define krte hai which is good 

const name = 'Vidit love her'
const name2 = 'baby so much '

// console.log(name , name2 ); // ye syntax acha nhi aaj ke time mai use krna 

// *******************use backtick *******************// 

console.log(`${name} ${name2}`); // ye ek modern way hai syntax ka use krne mai and ye backend mai bhi use hota hai 


// string ek object hai yaha ; ham ek new string mai bhi add kr skte hai 
 const str = new String("Princess")  
 console.log(typeof str[0] , typeof  str[1], typeof str[2], typeof  str[3], typeof str[4] , typeof  str[5] , typeof  str[6] , typeof  str[7] ,  typeof str[8] );  

 console.log(str.__proto__); // aise krne se hame object mil jata hai 
 console.log(str.indexOf('c')); // isse indexOf se indexnumber pata chalta hai ki konsa number hai; 
 
 const newstr = str.substring(0,4); // iska mtlb hai ki o se 3 tak exclude 4 jo bhi character hai vo print ho jayega => prin 0 , 1, 2, 3, ye hai substring ka mtlb 
 console.log(newstr); 
  
 // *****************************using trim concept *************************// 

 const newStrOne = "         Vidit soniya"
 console.log(newStrOne);
 console.log(newStrOne.trim())
   

  // *****************************using replace concept *************************// 
  
  const url = "https://velnavi.com/soniya%20profile"; 
  console.log(url.replace('%20', '-'));  

// strings is the most powerfull in any languages // 

console.log(url.includes('soniya'));
console.log(url.includes('vidit'));
console.log(url.includes('velnavi')); 

 


 
