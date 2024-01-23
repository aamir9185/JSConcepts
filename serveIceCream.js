let stock = {
    Fruits :["Apple","Banana","Strawberry","Crannberry"],
    Liquid :["Water","Milk"],
    Holder:["Cone","Cup","Stick"],
    Topping:["Cherry","Chocochip","Peanuts"]
}

let is_shop_open = false;

let order = (work,time)=>{
return new Promise((resolve,reject)=>{
if (is_shop_open) {
    setTimeout(() => {
    resolve(work())
        
    }, time);
}else{
    reject(console.log("Sorry the shop is closed"))
}
})
}

order(()=>console.log(`${stock.Fruits[2]} was selected`),1000)
.then(()=>{
    return order(()=> console.log("Production Started "),0)
})
.then(()=>{
    return order(()=>console.log("The fruit was chopped"),2000)
})
.then(()=>{
    return order(()=>console.log(`${stock.Liquid[1]} was mixed`),3000)
})
.then(()=>{
    return order(()=>console.log("The machine has started"),1000)
})
.then(()=>{
    return order(()=>console.log(`Ice cream added to the ${stock.Holder[0]}`),1000)
})
.then(()=>{
    return order(()=>console.log(`${stock.Topping[0]} was added `),1000)
})
.then(()=>{
    console.log("Ice Cream was server")
})
.catch(()=>{
    console.log("Customer Left")
})
.finally(()=>{
    console.log("Good Job!")
})
