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
// 9/16/21

function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;
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