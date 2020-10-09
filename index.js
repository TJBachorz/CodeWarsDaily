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
// 9/7/20

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//--------------------------------------
// 9/8/20

function incrementString (string) {
    nums = string.match(/\d/g)
    string = string.split("")
    let t = 0
    console.log(nums)
    while (nums !== null && t < nums.length) {
        string.pop()
        t++
    }
    string = string.join("")
    nums !== null ? nums = nums.map(num => parseInt(num)): num
    return nums === null ? string += 1 : null
    if (nums[nums.length-1] === 9) {
        nums[nums.length - 1] = 0
        nums[0] += 1
        nums = nums.map(num => num.toString()).join('')
    } else {
        nums[nums.length - 1] += 1
        nums = nums.map(num => num.toString()).join('')
    }
    return string + nums
}

//----------------------------------------
// 9/9/20

function upArray(arr){
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9) {
        return null
        }
    }
    let num = arr.join("")
    num = parseInt(num)
    num += 1
    num = num.toString().split("")
    num = num.map(number => parseInt(number))
    return num
}
//--------------------------------------
// 9/10/20

function highestRank(arr){
    console.log(arr)
    let mostFrequent = 0
    let count
    let numberOfInstances = 0
    for (let i = 0; i < arr.length; i++) {
        count = arr.filter(num => num === arr[i]).length
        if (count > numberOfInstances) {
            mostFrequent = arr[i]
            numberOfInstances = count
        } else if (count === numberOfInstances && arr[i] > mostFrequent) {
            mostFrequent = arr[i]
            numberOfInstances = count
        }
    }
    return mostFrequent
}

//--------------------------------------
// 9/11/20

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
    let nameArray = dirtyFileName
        .split(/\d/)
        .filter(element => element !== "")
        .join().split("")
    nameArray.shift()
    nameArray = nameArray.join("").split(".")
    return nameArray[0] + "." + nameArray[1];
    }
}

//-------------------------------------
// 9/12/20

var sum_pairs=function(ints, s){
    let minIndex = Infinity
    let answer
    for (let i = 0; i < ints.length; i++) {
        for (let j = i+1; j < ints.length; j++) {
        if (ints[i] + ints[j] === s && j < minIndex)  {
            minIndex = j
            answer = [ints[i], ints[j]]
        }
        }
    }
    return answer
    }

//--------------------------------------------
// 9/13/20

function tickets(peopleInLine){
    let answer = "YES"
    let cashOnHand = {};
    peopleInLine.forEach(person => {
        if (!cashOnHand[person.toString()]) {
            cashOnHand[person.toString()] = 1
        } else {
            cashOnHand[person.toString()] += 1
        }
        person -= 25
        switch(person) {
            case 75:
            case 50:
                if (cashOnHand["50"] >= 1) {
                cashOnHand["50"] -= 1
                person -= 50
                }
            case 25:
                while (person >= 25 && cashOnHand["25"] >= 1) {
                cashOnHand["25"] -= 1
                person -= 25
                }
            case 0:
                if (person !== 0) {
                answer = "NO"
                }
        }
    })
    return answer
}

//----------------------------------------------------
// 9/14/20

function stringTransformer(str) {
    str = str.split(" ").reverse()
    let answer = []
    str.map(string => {
        string.split("").map((letter, index, array) => {
        if (array[index] === array[index].toUpperCase()) {
            array.splice(index, 1, letter.toLowerCase())
        } else {
            array.splice(index, 1, letter.toUpperCase())
        }
        if (index === array.length - 1) {
            answer.push(array.join(""))
        }
        })
    })
    return answer.join(" ")
}

//-------------------------------------------
// 9/15/20

function abbreviate(string) {
    let answer = ""
    string = string.split(" ")
    string.forEach(word => {
        if (word.length < 4) {
            return string[string.length-1] === word ? answer = answer.concat(word, " ") : answer = answer.concat(word)
        } else if (word.includes(/-/)) {
            word.split("-").forEach(subWord => {
                answer = answer.concat(word[0], (word.length-2), word[word.length - 1])
            })
            
        } else {
        }
        
    })
    return answer
}

//-----------------------------------------------
// 9/16/20

Array.prototype.square = function() {return this.map(n => n**2)}
Array.prototype.cube = function() {return this.map(n => n**3)}
Array.prototype.sum = function() {return this.reduce((acc, n) => acc += n, 0)}
Array.prototype.average = function() {return this.reduce((acc, n) => acc += n, 0) / this.length}
Array.prototype.even = function() {return this.filter(n => n % 2 === 0)}
Array.prototype.odd = function() {return this.filter(n => n % 2 !== 0)}

//------------------------------------------------
// 9/17/20

function encrypt(text, n) {
    if (n <= 0) 
        return text 
    text.split("")
    let encryption = []
    text = text.split("")
    let t = 0
    while (t < n) {
        encryption = encryption.concat(text)
        for (const [i, v] of encryption.entries()) {
        console.log(i, v)
        i % 2 == 0 ? encryption.splice(i, 1) : encryption[i]
        t++
        }
    }
    return encryption.join()
}
  
function decrypt(encryptedText, n) {

}

//-------------------------------------------------
// 9/18/20

function bouncingBall(h,  bounce,  window) {
    let views = -1
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return views
    while (h > window) {
        h *= bounce
        views += 2
    }
    return views
}

//-------------------------------------------------
// 9/19/20

function stat(strg) {
    let h = [], m = [], s = []
        strg = strg.split(',')
        strg.forEach(stat => {
            stat = stat.split("|")
            h.push(stat[0])
            m.push(stat[1])
            s.push(stat[2])
        })
        let range = `${Math.max(...h) - Math.min(...h)}|${Math.max(...m) - Math.min(...m)}|${Math.max(...s) - Math.min(...s)}`
        console.log(range)
}

//------------------------------------------------
// 9/23/20

function multiplesOf3and5(number) {
    let n = 0
    let sum = 0
    while (n < number) {
        if (n % 3 === 0 || n % 5 === 0) {
            sum += n
        }
        n++
    }
    return sum
}

//------------------------------------------------
// 9/24/20

function ipToInt32(ip){
    let decimalArray = []
    let i = 1
    
    function make8Bit(string) {
        while (string.length < 8) {
            string = "0" + string
        }
        return string
    }
    
    function mapTo32Bit(number) {
      decimalArray[decimalArray.length] = (number * i)
      i *= 2
    }
    
    let bitmap = ip.split(".")
        .map(snippet => (+snippet).toString(2))
    let paddedBitmap = bitmap.map(make8Bit)
    let joinedBitmap = paddedBitmap
        .join('')
        .split("")
        .reverse()
    joinedBitmap.forEach(mapTo32Bit)
    return decimalArray.reduce((acc, number) => acc + number)
}

//------------------------------------------------
// 9/27/20

Math.round = function(number) {
    if (!number.toString().split("").includes(".")) {
        return number
    } else {
        let splitNum = number.toString().split(".")
    }; // TODO: fix this
};

Math.ceil = function(number) {
return 0; // TODO: fix this
};

Math.floor = function(number) {
return 0; // TODO: fix this
};

//-----------------------------------------
// 9/28/20

function cleanString(s) {
    function checkBackspaces(num, array) {
        if (splitString[num] === "#") {
            splitString.splice(num, 1)
            splitString.splice(num - 1, 1)
            num = num - 2
        }
    }
    splitString = s.split("")
    console.log(splitString)
    for (let i = 0; i < splitString.length; i++) {
        checkBackspaces(i, splitString)
        console.log(splitString, "i=", i)
    }
    
    return splitString
}

//------------------------------------------------
// 10/5/20

// function solve(a,b){
//     let aSplit = a.split("*")
//     let bWithReplacement = b.replace(aSplit[0], "")
//     if  (bWithReplacement.match(aSplit[1]) && ) 
// }

//------------------------------------------------
// 10/9/20

let message = '1010100jon1001010jon101100jon100000jon1101110jon1101111jon100000jon1101000jon1101111jon1101111jon1101011jon1110011jon100000jon1110101jon1101110jon1110100jon1101001jon1101100jon100000jon1101110jon1100101jon1111000jon1110100jon100000jon1110111jon1100101jon1100101jon1101011jon101110jon100000jon1010111jon1101000jon1100001jon1110100jon100000jon1100001jon1110010jon1100101jon100000jon1111001jon1101111jon1110101jon100000jon1100001jon100000jon1100110jon1101001jon1110011jon1101000jon1100101jon1110010jon1101101jon1100001jon1101110jon111111'

function decodeMsg(message) {
    let mapped = message.split("jon")
        .map(string => {   
        return String.fromCharCode(parseInt(string, 2))
    })
    return mapped.join("")
}