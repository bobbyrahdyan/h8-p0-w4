function ubahHuruf(kata) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let urutan = 0;
    let str = '';
    for (let i = 0; i < kata.length; i++) {
        urutan = abjad.indexOf(kata[i])
        str += abjad[urutan + 1]
    }
    return str
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu