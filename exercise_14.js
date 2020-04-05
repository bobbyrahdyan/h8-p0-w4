function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let arr = [];
    let asal = 0;
    let tujuan = 0;
    let ongkos = 0;
    for (let i = 0; i < arrPenumpang.length; i++) {
      for (let j = 0; j < rute.length; j++) {
        if (arrPenumpang[i][2] === rute[j]) {
          tujuan = j
        } else if (arrPenumpang[i][1] === rute[j]) {
          asal = j
        }
      }
      ongkos = (tujuan - asal) * 2000
  
      let object = {
        penumpang: arrPenumpang[i][0],
        asal: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: ongkos
      }
      arr.push(object)
    }
    return arr
  }
  //TEST CASE
  console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
  ]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]