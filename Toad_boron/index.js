async function getAllProducts(){
    var result = await fetch("https://localhost:7003/api/Product");
    console.log(result);
}
getAllProducts()