// main usecase is for shooping cart

// const MyNums = [1,2,3,4];
// const MyTotal = MyNums.reduce((acc,currValue)=>acc+currValue,0);
// console.log(MyTotal);   



// most common usecase is to add whatever is in array so we use reduce method
const shoopingCart = [
    {
        itemName:"tech-course",
        price:3000
    },
    {
        itemName:"shoes",
        price:2000
    },
    {
        itemName:"t-shirt",
        price:1000
    },
    {
        itemName:"jeans",
        price:4000
    },  
    {
        itemName:"watch",
        price:5000
    }
]

const response = shoopingCart.reduce((acc,currValue)=> acc+currValue.price,0);
console.log(response);