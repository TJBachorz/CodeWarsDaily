//------------------------------------------------------------
// 9/14/21

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