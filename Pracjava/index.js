// console.log("Hey virndraa good morning !");
// let emp = {
//     Name : "Virendra",
//     Id : 1520191629,
//     Course : "Msc-It",
//     Subject : "Web Programming"
// }
// // console.log(emp);
// // for(let name in emp){
// //     console.log(name ,':',emp[name]);
// // }
// let color = ["Red","Blue","Green","Yellow","Orange","Pink"];
// for(let name of color){
//     console.log(name);
// }

// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
//     if(i===5){
//         break;
//      }
     
// }

// let j = 0;
// while(j <=10){
//     console.log(j);
//     j++;
//     if(j % 2 === 0){
//         j++;
//         continue;
//     }

// }

// let movie ={
//     names : "Aashiqui3",
//     Date: 2013,
//     Director: "Mohit Suri",
//     BoxOffice: 83
// }

// function show(movi){
//        for(let name in movi){
//         if(typeof movi[name] === "number"){
//             console.log(name,movi[name]);
//         }
//        }
// }
// show(movie);

// let emp = {
//     Name : "Virendra",
//     Id : 1520191629,
//     Sub : {
//         Name1 : "Web Programming",
//         Name2 : "Data Science"
//     },
//     show : function(){
//             console.log("Hey virendra how are you ?");
//         }   
// }
// emp.show();

// function mobile(name,model){
//     return{
//         Name: name,
//         Model: model,
    
//         show : function(price){
//          return price;
//     }
//     }
// }
// let result = mobile("Vivo","Y15");
// console.log("The name of mobile is",result.Name," and the model of the mobil is ",result.Model," and the price of mobile is ",result.show(14449));
// console.log("The name of mobile is ",result.Name," And The model of mobile is ",result.Model," And The price of mobile is",result.show(),".");

// let result1 = mobile("Oppo","A15");
// console.log("The name of second mobile is",result1.Name," and the model of mobile is ".result1.Model," and the price of mobile is ",result1.show(18599));

// let results = mobile("Oppo","A15");
// console.log("The name of second mobile is",results.Name," and the model of the 2nd mobil is ",results.Model," and the price of 2nd mobile is ",results.show(18599));

// let res = mobile("Samssung","X12");
// console.log("The name of third mobile is ",res.Name," and the model of third mobilee is ",res.Model," and the price of third mobile is ",res.show(22799));

function Movie(name,release,box,verdict){
    this.name = name;
    this.Release = release;
    this.Box = box;
    this.Verdict = verdict;
}

let movie = new Movie("Drishyam2",2022,220,"Blockbuster");
console.log(movie);


let movie1 = new Movie("Aadipurush",2023,2000,"All time blockbuster");
console.log(movie1);