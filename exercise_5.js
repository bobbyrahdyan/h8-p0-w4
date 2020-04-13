function ubahHuruf(kata) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let str = '';
     
    for (let i = 0; i < kata.length; i++) {
      for (let j = 0; j < abjad.length; j++) {
            if (kata[i] === abjad[j]) {
                if (kata[i] === 'z') {
                    str += 'a'
                } else {
                    str += abjad[j + 1]
                }
            }
        }
    }
    return str
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu