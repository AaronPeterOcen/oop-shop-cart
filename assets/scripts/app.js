class Product {
  //   title = "DEFAULT";
  //   imageUrl;
  //   price;
  //   description;

  constructor(title, imageUrl, price, desc) {
    (this.title = title),
      (this.imageUrl = imageUrl),
      (this.price = price),
      (this.description = desc);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addItemBtn = prodEl.querySelector("button");
    addItemBtn.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
  prod;
}
// console.log(new Product());

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.outPutTotal.innerHTML = `<h2>Total :\$${1}</h2>`;
  }

  render() {
    const cartElement = document.createElement("section");
    cartElement.innerHTML = `
    <h2>Total :\$${0}</h2>
   <button>Order Now !</button>
    `;
    cartElement.className = "cart";
    this.outPutTotal = cartElement.querySelector("h2");
    return cartElement;
  }
}

class ProductList {
  product = [
    new Product(
      "a pillow",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Average_White_Pillow.jpg/220px-Average_White_Pillow.jpg",
      10.99,
      "A normal pillow"
    ),
    new Product(
      "a mattress",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shifman_Mattress_Set.JPG/300px-Shifman_Mattress_Set.JPG",
      15.99,
      "A normal mattress"
    ),
  ];
  constructor() {}
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.product) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Pay {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartLi = this.cart.render();
    const productList = new ProductList();
    const prodctList = productList.render();

    renderHook.append(cartLi);
    renderHook.append(prodctList);
  }
}

class App {
  static init() {
    const shop = new Pay();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
