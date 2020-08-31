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