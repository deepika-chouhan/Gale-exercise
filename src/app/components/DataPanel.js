import React from 'react'
import { observer } from 'mobx-react'

@observer export default class DataPanel extends React.Component {
  constructor(props) {
    super(props)
  }
  onclickAdd = (id) => {
    this.props.DataState.data[id].inUse = 1
    this.props.DataState.data[id].count = 1
    this.props.DataState.cartView.products.push(id)
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("ItemList",JSON.stringify(this.props.DataState.data));
      localStorage.setItem("CartView",JSON.stringify(this.props.DataState.cartView))
    } else {
      // Sorry! No Web Storage support..
    }
  }
  addItem = (id) => {
    this.props.DataState.data[id].count += 1
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("ItemList",JSON.stringify(this.props.DataState.data));
      localStorage.setItem("CartView",JSON.stringify(this.props.DataState.cartView))
    } else {
      // Sorry! No Web Storage support..
    }
  }
  removeItem = (id) => {
    if (this.props.DataState.data[id].count === 1) {
      this.props.DataState.data[id].count = 0
      let index = this.props.DataState.cartView.products.indexOf(id)
      this.props.DataState.cartView.products.splice(index, 1)
    } else {
      this.props.DataState.data[id].count -= 1
    }
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("ItemList",JSON.stringify(this.props.DataState.data));
      localStorage.setItem("CartView",JSON.stringify(this.props.DataState.cartView))
    } else {
      // Sorry! No Web Storage support..
    }
  }

  render() {
    let list = this.props.DataState.data.map((data) => {
      return (
        <div key={data.id} className="list-item">
          <img src={`images/${data.name}.jpg`} alt={data.name} width="100px" height="100px" title={data.name}/>
          <div className="brand">{data.name}</div>
          <div className="product">{data.productName}</div>
          <div className="packing">{data.packingDetail}</div>
          <div className="price">Rs {data.price}</div>
          {data.count ?
            (
              <div className="cartItem">
                <div className="removeItem" onClick={() => this.removeItem(data.id)}>-</div>
                <div className="cartValue">{data.count} in cart</div>
                <div className="addItem" onClick={() => this.addItem(data.id)}>+</div>
              </div>
            )
            :
            (
              <button className="addToCart" onClick={() => this.onclickAdd(data.id)}>Add to cart</button>
            )
          }

        </div>
      )
    })
    return (
      <div className="data-panel">
        {list}
      </div>
    )
  }
}