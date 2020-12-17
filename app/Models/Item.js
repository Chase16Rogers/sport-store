import { generateId } from "../Utils/GenerateId.js"


export default class Item {
  constructor({ name, price, description, stock, img, }) {
    this.name = name
    this.price = price
    this.description = description
    this.stock = stock
    this.soldOut = false
    this.inCart = 0
    this.img = img
    this.id = generateId()
  }

  get Template() {
    return `
            <div class="col-3">
                <div class="card">
                    <img class="card-img-top" src="${this.img}" alt="">
                    <div class="card-body">
                        <h4>${this.name}</h4>
                        <p>$${this.price}</p>
                        <p>${this.description}</p>
                        <p>Only ${this.stock} left in stock</p>
                        <button id="${this.id}" class="btn btn-success" onclick="app.itemsController.addCart('${this.id}')">Add to cart</button>
                    </div>
                </div>
            </div>
        `
  }

  get CartTemplate() {
    return /*html*/`
    <div class="" id="${this.name}">
<img src="${this.img}" class="img-fluid" alt="">
<h2>X ${this.inCart}</h2>
<h3>${this.name} <i class="fa fa-trash" onclick="app.itemsController.delete(this.id)" aria-hidden="true"></i></h3>
<h3>$${this.price}</h3>
<p>${this.description}</p>
</div>
`
  }
}