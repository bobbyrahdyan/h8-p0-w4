function shoppingTime(memberId, money) {
    if (memberId === undefined || memberId.length === 0) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }

    let items = [{
            brand: 'Sepatu Stacattu',
            price: 1500000
        },
        {
            brand: 'Baju Zoro',
            price: 500000
        },
        {
            brand: 'Baju H&N',
            price: 250000
        },
        {
            brand: 'Sweater Uniklooh',
            price: 175000
        },
        {
            brand: 'Casing Handphone',
            price: 50000
        }
    ]

    let obj = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    }

    for (let i = 0; i < items.length; i++) {
        if (money >= items[i].price) {
            obj.listPurchased.push(items[i].brand)
            money -= items[i].price
        }
    }
    obj.changeMoney = money

    return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja