function digitPerkalianMinimum(angka) {
    let newArr = [];
    let str = '';
    for (let i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            str += i
            str += angka / i
            newArr.push(str)
        }
        str = '';
    }

    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        result.push(Number(newArr[i]))
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                let temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    return String(result[0]).length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2