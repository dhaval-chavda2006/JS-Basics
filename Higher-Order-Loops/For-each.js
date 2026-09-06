// for-each
// also prints direct values like for-of


// works on array simply provide a iterator and output is values
const lang = ["gujarati", "hindi", "marathi", "sanskrit"];

// lang.forEach(function (val){
//     console.log(lang);
// });

// lang.forEach((val) => {
//     console.log(val);
// });

// function printMEEE(val){
//     console.log(val);
// }
// lang.forEach(printMEEE);


// lang.forEach((val,index,arr) => {
//     console.log(val,index,arr);
// })

/***************************************************************************** */
// for map

const map99 = new Map();

map99.set('IN','india');
map99.set('EU', 'europe');
map99.set('AUS', 'Australia');
map99.set('USA', 'United states of America');


// map99.forEach((val) => {
//     console.log(val);
// });


/*************************************************************************** */


// major usecases..........

const FileExtLang=[
    {
        fileExt:"js",
        Lang:"javascript"
    },

    {
        fileExt:"java",
        Lang:"java"
    },

    {
        fileExt:"py",
        Lang:"python"
    }
]

FileExtLang.forEach((val,index)=>{
    console.log(val.fileExt,index);
})
