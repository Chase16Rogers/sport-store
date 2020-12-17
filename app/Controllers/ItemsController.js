import { ProxyState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"


function _drawItems() {
  let template = ""

  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById("items").innerHTML = template
}

function _drawCart() {
  let template = ""
  ProxyState.items.forEach(c => {
    if (c.inCart > 0) {
      template += c.CartTemplate
    }
  })

  document.getElementById("cart").innerHTML = template
}

function _drawTotal() {
  document.getElementById("total").innerText = ProxyState.total.toString()
}

function _drawMoney() {
  document.getElementById("money").innerText = ProxyState.money.toString()
}

export default class ItemsController {
  constructor() {
    ProxyState.on("items", _drawItems)
    ProxyState.on("items", _drawCart)
    ProxyState.on("money", _drawMoney)
    _drawCart()
    _drawItems()
    _drawMoney()
  }


  addCart(id) {
    itemsService.addCart(id)
    _drawCart()
    _drawItems()
    _drawTotal()
  }

  checkout() {
    itemsService.checkout()
    _drawCart()
    _drawTotal()
    $("#cart-modal").modal('hide')
  }

  addFunds() {
    ProxyState.money += 10
  }

  delete(id) {
    itemsService.delete(id)
  }

}