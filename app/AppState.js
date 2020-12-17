import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Item[]} */

  items = [new Item({ name: "Knife", price: 20, description: "is a kife", stock: 5, img: "https://thiscatdoesnotexist.com", }), new Item({ name: "boot", price: 120, description: "wearable", stock: 200, img: "https://thispersondoesnotexist.com" })]

  money = 200
  total = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
