import { ProxyState } from "../AppState.js"


class ItemsService {
  checkout() {
    let money = ProxyState.money
    let total = ProxyState.total

    if (money >= total) {
      ProxyState.money -= total
      ProxyState.total = 0
      let itemArr = ProxyState.items
      for (let i = 0; i < itemArr.length; i++) {
        ProxyState.items[i].inCart = 0
        console.log(ProxyState.items)
      }
    }
  }
  addCart(id) {
    let cartItems = ProxyState.items.findIndex(i => i.id == id)
    if (ProxyState.items[cartItems].stock > 0) {
      ProxyState.items[cartItems].inCart++
      ProxyState.items[cartItems].stock--
      console.log(ProxyState.items[cartItems].inCart)
      this.totalcalc(ProxyState.items[cartItems].price,)
    }
  }

  totalcalc(cost) {
    ProxyState.total += cost
    console.log(ProxyState.total)
  }

  delete(id) {
    let found = ProxyState.items.find(i => i.id == id)
    console.log(found)
  }
}



export const itemsService = new ItemsService()