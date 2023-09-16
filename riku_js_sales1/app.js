let saleA = [20,40,32,22,78]
let saleB =[30,45,57,20,90]

for(let i = 0; i < saleA.length; i++){

    if( saleA[i] > saleB[i] ){
        console.log("商品Aのほうが"+(saleA[i]-saleB[i])+"多く売れた");
    }
    else{
        console.log("商品Bのほうが"+(saleB[i]-saleA[i])+"多く売れた");
    }
}
