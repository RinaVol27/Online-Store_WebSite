async function getAllProducts(){
    var result = await fetch("https://localhost:7003/api/Product");
    console.log(result);

    if (result.status !== 200){
        console.log('Error: ' + result.status);
        return;
    }

    var data = await result.json();
    for (let i=0; i < data.lenght; i++){
        console.log(data[i]);
        addProductCard(data[i]);
    }
}
function addProductCard(product){
    let list = document.getElementById('products-list');

    let card = document.createElement('div');
    card.className = "card";

    card.innerHTML = '<img src="' + product.url + '"alt="Denim Jeans" style="width:100%>' +
    '<h1>' + product.productName + '</h1>' +
    '<p class="price">' + product.price + '</p>' +
    '<p>' + product.information + '</p>' +
    '<p><button>Add to Cart</button></p>'

    list.appendChild(card);
}

getAllProducts();
