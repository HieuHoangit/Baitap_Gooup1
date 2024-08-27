function divisibleby2(ni) {
        if (ni % 2 != 0 || ni == 0) {
            return false;
        } else return true
}

function main() {
    const n = [-4, 3, 6, -9, 0, 4, 1];
    for (let i = 0; i < n.length; i++){
        console.log(n[i] + " is "+divisibleby2(n[i]))
    }
}

main();

