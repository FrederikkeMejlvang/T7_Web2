window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
}

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "p.subtle"
  ).textContent = `${product.articletype}, ${product.brandname}`;
  copy.querySelector("p.price").textContent = `DKK ${product.price},-`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");

    if (product.discount) {
      copy.querySelector("article").classList.add("onSale");
    }
  }
  //append til DOM
  document.querySelector("main").appendChild(copy);
}
