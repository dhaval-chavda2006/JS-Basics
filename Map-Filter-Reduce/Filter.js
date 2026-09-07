

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const answer = arr.filter((i) => {
//     return i>4;
// })
// console.log(answer); 

/******************************************************************************************** */

// foreach

// const empty=[];
// arr.forEach((i)=>{
//     if(i>4){
//         empty.push(i);        
//     }
// })
// console.log(empty);

// same thing as filter but adding condition forEach. both works same.....

/******************************************************************************************* */



const book =[
    {
        title:"book1",
        genre:"fiction",
        published:2001
    },
    {
        title:"book2",
        genre:"fiction",
        published:2002
    },
    {
        title:"book3",
        genre:"action",
        published:2003
    },
    {
        title:"book4",
        genre:"comedy",
        published:2004      
    },
    {
        title:"book5", 
        genre:"fiction",
        published:2005
    },
    {
        title:"book6",
        genre:"science",
        published:2006
    }
]

// apply filter on this db only those books should be printed whose genre is fiction only

// const response = book.filter((i)=>{
//     if(i.genre === "fiction")
//     {
//         return i.title;
//     }
// })
// console.log(response);


//apply filter on this db only those books which were published after 2004

// const response = book.filter((i)=>{
//     if(i.published>2004){
//         return i.title;
//     }
// })
// console.log(response);

/********************************************************************************************** */