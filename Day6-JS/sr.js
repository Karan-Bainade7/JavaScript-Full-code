let marks=[35,92,90,85,82,65];
console.log(marks);

let info=["karan",22,"pendapur","btech engg"];
console.log(info);


//the array is mutable  you can change interms values of arrays
marks_karan =[9,2,4,3,4];
marks_karan[2]=9;


//but you can not change items values of arrray when itemrs is string bcz string is immutable
name=["karan"];
name[2]=w;
console.log(name);

//looping over the arrray
// print all element sof array

fev=["salman","sharuk","akshay","amir","allluarjun"];
for( let idx=0; idx<fev.length;idx++){
   console.log(fev[idx]);
}
console.log(fev);


// for given arrray with marks of studnets 

let mars=[85,94,20,28,63,40];
let sum=0;
for(let val of mars){
    sum +=val;
}
let avg= sum / mars.length;
console.log(`avg markks of the class= ${avg}`);


let items=[250,948,504,394,685,405];

for(let i=0; i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);


// let fooditems=["potato","apple","litchi","tomato","banana"];
// fooditems.push("burger");
// console.log(fooditems);


let fooditems=["potato","apple","litchi","tomato","banana"];
fooditems.pop();
console.log(fooditems);


// cancat method use in array

let mygirls=["komal","kirti","kalyali","kajal"];
let myboys=["arjun","karan","rahul","pratik"];
let com=mygirls.concat(myboys);
console.log(com);


// slice method

let kp=[23,43,65,87,98,33];
let cok=kp.slice(2,4);
console.log(cok);//last index not be count



//creating array to store companies solve this proble 

let companies=["odi","bmw","jagwar","mursazies","lamburgini"];
companies.shift();
companies.splice(2,2,"ola");
companies.push("farari");
console.log(companies);