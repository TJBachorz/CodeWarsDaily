//------------------------------------------------------------
// 9/14/21 -- fixing author

function birthdayCakeCandles(candles) {
    let highest = 0;
    candles.forEach(candle => {
        if (candle >= highest) {
            highest = candle;
        }
    });
    return candles.reduce((total, candle) => {
        return candle === highest ? total += 1 : total;
    }, 0);
}

//------------------------------------------------------------
// 9/15/21

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0, orangeCount = 0;
    const appleLandings = apples.map(apple => apple + a)
    const orangeLandings = oranges.map(orange => orange + b)
    for (const apple of appleLandings) {
        if (apple >= s && apple <= t) appleCount +=1;
    }
    for (const orange of orangeLandings) {
        if (orange >= s && orange <= t) orangeCount +=1;
    }
    console.log(appleCount);
    console.log(orangeCount);
}

//------------------------------------------------------------
// 9/16/21

function compareTriplets(a, b) {
    let aScore = 0, bScore = 0;
    const compareElements = i => {
        if (a[i] > b[i]) {
            aScore += 1;
        } 
        if (b[i] > a[i]) {
            bScore += 1;
        }
    }
    compareElements(0);
    compareElements(1);
    compareElements(2);
    return [aScore, bScore];
}

//------------------------------------------------------------
// 9/17/21

function gradingStudents(grades) {
    const roundGrade = grade => {
        if (grade < 38) return grade;
        const remainder = grade % 5;
        if (remainder === 3 || remainder === 4) {
            return grade + (5 - remainder);
        }
        return grade
    }
    return grades.map(roundGrade);
}

//------------------------------------------------------------
// 9/19/21

function aVeryBigSum(ar) {
    return ar.reduce((total, element) => total + element, 0)
}

//------------------------------------------------------------
// 9/20/21

function sockMerchant(n, ar) {
    const colors = Array.from(new Set(ar));
    return colors.reduce((total, color) => {
        let matches = 0;
        ar.forEach(number => {
            if (color === number) {
                matches++;
            }
        });
        total += Math.floor(matches / 2)
        return total;
    }, 0);
}

//------------------------------------------------------------
// 9/21/21

function countingValleys(steps, path) {
    let vallies = 0;
    let elevation = 0;
    for (let i=0; i < path.length; i++) {
        if (path.charAt(i) === 'U') elevation++;
        if (path.charAt(i) === 'D') elevation--;
        if (elevation === 0 && path.charAt(i) === 'U') vallies++;
    }
    return vallies;
}

//------------------------------------------------------------
// 9/23/21

function jumpingOnClouds(c) {
    let jumps = -1;
    for (let i=0; i < c.length; i++) {
        jumps++;
        if (c[i+2] === 0) i++;
    }
    return jumps;
}

//------------------------------------------------------------
