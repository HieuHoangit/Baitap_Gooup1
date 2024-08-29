function formatMoney(amount, numberToRound = 0) {
    let num = parseFloat(amount);
    let roundedNum = Math.round(num / Math.pow(10, numberToRound)) * Math.pow(10, numberToRound);
    return roundedNum.toLocaleString('vi-VN') + ' VNĐ';
}

function main() {
    console.log(formatMoney("200502", 3)); 
    console.log(formatMoney("10000000", 2));
    console.log(formatMoney("1234567.89", 0)); 
    console.log(formatMoney("211111111", 3));
}

main();

