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
    for(i=0; i < buy; i++){
        if(i+1>stock){
            console.log("stock habis")
            break
        }
        amount_price += price
        console.log(`total harga: ${amount_price}, buku ke - ${i+1}`)
    }
}
Books(4, 3)