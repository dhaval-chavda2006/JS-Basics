const marvel = ["ironman", "hulk", "spiderman"];
const dc = ["flash", "batman", "superman"];
const tv = ["friends", "dr house", "good doctor"];

// marvel.push(dc);
// console.log(marvel);        // this is not useful at all if you want first arr elements in second

const ans = marvel.concat(dc,tv);  // this is good method but has limitation of two arrays.
// console.log(ans);

const morethantwo = [...marvel, ...dc, ...tv];
// console.log(morethantwo)


console.log(Array.isArray("dhaval"));
console.log(Array.from("Dhaval"));