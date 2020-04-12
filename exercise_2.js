function fpb(angka1, angka2) {
    let temp1 = [];
    let temp2 = [];
    let result = [];
    let finalResult = [];

    for (let i = 0; i < angka1; i++) {
        if (angka1 % i === 0) {
            temp1.push(i)
        }
    }

    for (let i = 0; i < angka2; i++) {
        if (angka2 % i === 0) {
            temp2.push(i)
        }
    }

    for (let i = 0; i < temp1.length; i++) {
        for (let j = 0; j < temp2.length; j++) {
            if (temp1[i] === temp2[j]) {
                result.push(temp1[i])
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (temp1[i] > temp2[i]) {
            finalResult = result[i]
        } else {
            finalResult = result[i]
        }
    }
    return finalResult
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1