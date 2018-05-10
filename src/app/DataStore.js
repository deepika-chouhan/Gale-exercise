import { observable, action, computed, extendObservable, autorun, toJS } from 'mobx'
import dataSet from "./DataList.json"

export default class DataStore {
  constructor() {
    this.getData()
  }
  @observable cartView = {
    products: []
  }
  @observable data = []
  @observable data1 = []
  @action getData() {
    var ItemList = JSON.parse(localStorage.getItem('ItemList'))
    var CartView = JSON.parse(localStorage.getItem('CartView'))
    if (ItemList !== null) {

      this.data = toJS(ItemList)
      this.cartView = toJS(CartView)

    } else {
      dataSet.map((data, index) => {
        this.data.push(data)
        extendObservable(this.data[index], {
          count: 0
        })
      })
    }

  }
} 