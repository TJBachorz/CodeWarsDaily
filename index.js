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