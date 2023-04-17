async function getAllProducts(){
    var result = await fetch("product_card");
    console.log(result);

    if (result.status !== 200){
        console.log('Error: ' + result.status);
        return;
    }

    var data = await result.json();
    for (let i=0; i < data.lenght; i++){
        console.log(data[i]);
    }
}
