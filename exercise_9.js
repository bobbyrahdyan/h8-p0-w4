function checkAB(num) {
    let posisiA = [];
    let posisiB = [];   
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            posisiA.push(i);
        } else if (num[i] === 'b') {
            posisiB.push(i);
        }
    }

    let flag = false;
    for (let i = 0; i < posisiA.length; i++) {
        for (let j = 0; j < posisiB.length; j++) {
            if (Math.abs(posisiB[j] - posisiA[i]) === 4) {
                flag = true;
        }
      }
    }
  return flag;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false