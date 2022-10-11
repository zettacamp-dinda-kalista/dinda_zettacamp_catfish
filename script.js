function bookpurchasing(title, price, discount, tax, sale, stock, jumlah){

    const ti = title;
    
    let pri=price;
    
    // diskon/
    const dis= discount;
    let amoundis= pri * discount
    
    // after dicount
    const priceall= pri - amoundis;
    
    // Amount of tax
    const t = tax;
    
    // Price after tax
    const taxaff=pri * tax /100
    
    const sal= sale;
    
    let st= stock;
    let jum= jumlah;
    
    console.log("title:",ti)
    console.log("price:","Rp.", price)
    console.log("dicount:",dis,"%")
    console.log("tax:",t,"%")
    console.log("total diskon:"+" Rp.", amoundis);
    console.log("Total:"+"Rp.",priceall)
    console.log("total tax:", taxaff)
    console.log("sale :", sal )
    
    for (let i = 1; i <= jumlah; i++) {
        console.log(i)
        jumst= pri * i;
        console.log("-----------------------")
        console.log("barang yang dibeli",);
        console.log("-----------------------")
    
        stock= stock-i;
        jum+=1
        console.log("jumlah:", jum)
        console.log("total price:",priceall)
        console.log("stock Update:",stock)
            if(stock > 0){
                console.log("--buku masih bisa dibeli--")
            } else{
                console.log("--Buku sudah habis--")
            break;
    
            }
        }
    
    }
    bookpurchasing("oke", 20000, 0.1, 50, true,5, 2);