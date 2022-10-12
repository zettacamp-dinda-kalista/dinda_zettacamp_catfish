function Books(buy, stock){
    let price = 20000
    console.log(`harga: ${price}`)

    let discount = 20
    console.log(`discount: ${discount} %`)
    let discPrice = price * (discount/100)

    // harga setelah diskon 
    price -= discPrice
    console.log(`harga setelah di diskon: ${price}`)

    let amount_price = 0
     // menghitung index, ketika value masih terpenuhi maka akan mengambil nilai i++ atau i=i+1
    for(i=0; i < buy; i++){
        // ketika hasil i=i+1 sudah di tambah 
        if(i+2>stock){
            console.log("stock habis")
            break
        }
        amount_price += price
        console.log(`total harga: ${amount_price}, buku ke - ${i+1}`)
    }
}
Books(6, 5)