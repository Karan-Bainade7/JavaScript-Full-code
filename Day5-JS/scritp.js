// //string are for storing text
// string write wiht quotes
// stirng is a sequnce of charecter to used to represent Text
// javascrit string is  zero or MutationRecord writtteeen in quotes 

let myname ="karan punamsing bainade";
console.log(myname);


//can you use single and double quotes

let coolname='alluarjun';
let heroofcricketer="virat_kohli";
console.log(coolname);
console.log(heroofcricketer);

//indivisual charector access
let str="karan"//string  start with 0 in this 5 string values provided
console.log(str[2]);
console.log("finally i got my chooise od sttring value");


let cricketer="viratkohli";
console.log(cricketer[5]);

//back-ticks(``)uisng to strings
let text=`hello karan`;
console.log(text[4]);


let obj={
    item:"pen",
    price:20,
};

let out=`the cost of ${obj.item} is ${obj.price}`;
console.log(out);

//find string lenght total
let len="hello, everyone my name is karan bainade. i am form maharashtra,india";
// console.log(len.length);

kb=len.length;
console.log(kb);



let  _hyy_my_name_="karan";
your_name=_hyy_my_name_[2];
console.log(your_name);

console.log("hello karan,  \n how are you \t bro");



//we learn some sttirng Methods are followings:

//1.uppercase()

let bhaiya_ji="karan";
kb=bhaiya_ji.toUpperCase();
console.log(kb);

let bhabi_ji="KiRti";
kf=bhabi_ji.toLowerCase();
console.log(kf);


// let Don="Maniiyaa   surve    bolle to pine ka   jisa dill chahe       vaisa jine ka ....";
// k=Don.strim();
// console.log(k);


//slice (start,end)

//end string value not count in this slice mentho of sttring

let city="mumbai";
console.log(city.slice(2,5));


//concat method is join to variable string values

let dog="my Dog golden_ritriver";
let cat=" My  Cat shilu.";
console.log(dog.concat(cat));



//string value replace krne ke  liye hmm replce() method  use krte he
let chg="karan";
console.log(chg.replace("k","m")); 
// output :- karan ho gya maran


//charAt() use to index find or return krne ke liye 

let ss="lgfljahghlagsf";
console.log(ss.charAt(5));
 
 //questions solve 1  


 let fullname=prompt("enter your name");
 let instausername ="@"+fullname+fullname.length();
 console.log("my instargrma id is =",instausername);

 //output is @karan7 like
 









