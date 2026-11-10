// ************************************* video number 12 - numbers and maths in js ***************************

// **********************first is numbers ********************

const score = 200;  
console.log(score) 

 
const balance = new Number(100) 
console.log(balance);  

console.log(balance.toString()); // isse krne se ye string ban jati hai jo bhi hamne likha hua hai and agar ham isme .length aur krde to ye iski lenght kitni hai vo bhi pata chal jayega 

// console.log(balance.toFixed(3));  // isse hame kya milta hai ki jo 100 hai uske point ke baad 3 zero aur lag jayegi  


const newNum = 23.3333; 

// console.log(newNum.toPrecision(4)); // iss toprecision se kya hoga ki jo bhi ham value uske andar rakhenge to utni hi value show hogi jese 3 rakhi hai to 23.3 hi show hogi kuch aise 

// and string return krega hame ye  and use it very carefully 

const tens = 100000000; 
console.log(tens.toLocaleString('en-IN')); 

// ye tolocalstring se hame vo value jo hoti hai vo ache se comma laga kar milti hai to ye achi cheez hai ;  

// *****************CONCEPTS - MATHS ; *********************
 

console.log(Math); 
console.log(Math.abs(-3)); 


 // iska mtlb hai ki jo abs hai vo absolute khete hai ham usko to, jo bhi ham usme value likhenge vo cahnge ho jayegi uska sign jo hai vo change ho jata hai 

console.log(Math.round(34.498)); 

// iska mtlb hai ki iski jo roundof value hogi vo hame mil jayegi  


console.log(Math.ceil(5.1));

// ceil ka mtlb hai ki . ke baad agar thodi se bhi value jyda hui vo 5 se 6 ho jyega answer round of hoke 

console.log(Math.max(2,3,4,5,11));  


// *********************************main thing is math.random is very useful for projects  

console.log(Math.random()) // ye math.random ki value hamesha aur hamesha value ayegi zero and one ke beech mai 
console.log(Math.random()*10);  
// ye krne se ye hoga ki jo value hai vo zero bhi ho skti hai and o.0 kuch aise but jee niche + 1 kra to kabhi value zero nhi ayegi 
console.log((Math.random()*10) + 1); 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1 )) + min  ) // ye ek formula hai and ye plus isiliye kra jisse zero value na aye  

// ye + min isiliye kra hai kuki hame min 10 chaiye usse niche nhi to isiliye + min kra hai 
// ye max - min isiliye kra hai kuki vo range ajye hamre pass ji hame ek range mil jye 
// and ye + 1 isiliye kra hai kuki hame value zero na mile 













