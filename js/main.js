// const p = new Promise ((resolve,reject) =>{
// resolve("hi")
// })
// console.log(p);

// const p = new Promise ((resolve,reject) =>{
//     setTimeout(() => {
//         reject ({eror : null})
//     },2000);
// })
// p.then((data) =>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
    
// })



// function datafatch() {
//     const fetchPromis = new Promise((resolve, reject) => { // resolve এবং reject এখানে প্যারামিটার হিসেবে নিবেন
//         setTimeout(() => {
//             resolve("data fetch done"); // এখন resolve সঠিকভাবে কাজ করবে
//         }, 2000);
//     });
//     return fetchPromis;
// }

// datafatch().then((data) => {
//     console.log(data); // data fetch done দেখাবে
// })
// .catch((err) => {
//     console.log(err); // যদি কোনো error হয়, তা print হবে
// });



// fetch("https://dummyjson.com/products") .then((data) =>{
//     console.log(data);
// })
// .catch((Error) =>{
//     console.log(Error); 
// })


// function datafatch(){
//     return new Promise ((resolve,reject)=>{
//         fetch("https://dummyjson.com/products")
//         .then((res)=>{
//             resolve(res); 
//         }).catch((eror)=>{
//              reject(eror)
//         })
//     })
// }


// function categorywise (){
//     return new Promise((resolve,reject)=>{
//         fetch("https://dummyjson.com/products").then((res)=>{
//             resolve(res);
//         }).catch((eror) =>{
//             reject(eror)
//         })
//     })
// }



///function categoryWiseData (){
//return new Promise ((resolve,reject)=>{
//         fetch("https://dummyjson.com/products/category/smartphones").then((res)=>{
//             resolve(res);
//         }).catch((eror) =>{
//             reject(eror)
//         })
//     })
// }
// // datafatch()
// // categorywise()
// // categoryWiseData()

datafatch().then((data1)=>{
console.log(data1.url);

   return categorywise()    
    }).then((data2) =>{
        console.log(data2.url);

        return categoryWiseData()
    }).then ((caWData) =>{
        console.log(caWData.url);   
    })
    .catch((eror) =>{
        console.log(eror);
    })




 function display(data) {
    console.log(data);
 }

 dataFetch().then((res) =>{
    console.log(res);
 })
 .catch((Error) =>{
    console.log(Error);
    
 })

 