//-----------------------------------------
// 8/27/20

function count (string) {  
    let hash = {};
    for (let i = 0; i < string.length; i++) {
        if (hash[string.charAt(i)] === undefined) { 
        hash[string.charAt(i)] = 1;
        } else {
        hash[string.charAt(i)] += 1;
        }
    }
    return hash;
}

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

//----------------------------------------
// 8/28/20

function comp(array1, array2) {
    if (!array1 || !array2) return false
    const answer = array1.filter(value => array2.includes(value * value))
    return true ? answer.length == array1.length : false
}

//-----------------------------------------
// 8/29/20

function reverseWords(str) {
    str = str.split(' ')
    str = str.map(word => word.split('').reverse().join(''))
    return str.join(' ')
}

//-----------------------------------------
// 8/30/20

function boolToWord( bool ){
    return bool ? "Yes" : "No"
}

//------------------------------------------
// 8/31/20

function makeNegative(num) {
    return num < 0 ? num : -(num)
}

//-----------------------------------------
// 9/1/20

function domainName(url){
    url.includes("www.") ? url = url.split("www.").join("") : url
    url.includes("http://") ? url = url.split("http://").join("") : url
    url.includes("https://") ? url = url.split("https://").join("") : url
    return url.split(".")[0]
}
// could use .replace instead of .split
//----------------------------------------
// 9/2/20

function isPangram(string){
    const letters = string.toLowerCase().match(/[a-z]/g)
    const uniqueLetters = [...(new Set(letters))]
    return uniqueLetters.length === 26 ? true : false
}

//---------------------------------------
// 9/3/20

function isValidWalk(walk) {
    const northSouth = walk.filter(x => x ==='n').length === walk.filter(x => x ==='s').length ? true : false
    const length = walk.length === 10 ? true : false
    const westEast = walk.filter(x => x ==='w').length === walk.filter(x => x ==='e').length ? true : false
    return (northSouth && length & westEast)
}

//---------------------------------------
// 9/4/20

function camelCaseWithSpaces(camelCaseString) {
    let array = camelCaseString.split("").map(letter => {
    if (letter === letter.toUpperCase()) {
        letter = " " + letter
    }
        return letter
    })
    return array.join("")
}  

//---------------------------------------
// 9/5/20

function squareDigits(num){
    let splitInts = num.toString().split("")
    splitInts = (splitInts.map(n => parseInt(n) * n)).join('')
    return parseInt(splitInts)
}

//----------------------------------------
// 9/6/20

function findNb(m) {
    let currentVolume = 0
    let n = 0
    while (currentVolume < m) {
        n++
        currentVolume += n**3
    }
    return currentVolume === m ? n : -1
}

//---------------------------------------
