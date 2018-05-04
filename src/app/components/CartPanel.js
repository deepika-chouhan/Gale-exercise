import React from 'react'
import { observer } from 'mobx-react'

@observer export default class CartPanel extends React.Component {
    handleRemoveItem = (index, productId) => {
        this.props.DataState.cartView.products.splice(index, 1)
        this.props.DataState.data[productId].count = 0
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("ItemList",JSON.stringify(this.props.DataState.data));
            localStorage.setItem("CartView",JSON.stringify(this.props.DataState.cartView))
          } else {
            // Sorry! No Web Storage support..
          }
    }
    render() {
        let totalRupees = 0
        let listItems = this.props.DataState.cartView.products.map((productId) => {
            return this.props.DataState.data.find(product => product.id === productId)
        })
        totalRupees =  listItems.reduce((prev, cur) => {
            return prev + cur.count * cur.price
        }, 0)
        return (
            <div className={`cart-panel ${this.props.DataState.cartView.products.length ? 'show' : ''}`}>
                <h1>Your cart summary</h1>
                <table className="header">
                    <thead>
                        <tr>
                            <th>Items in cart</th>
                            <th>Total Rupees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.DataState.cartView.products.length}</td>
                            <td>{totalRupees}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="content">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Total Rs</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems.map((product, index) => {
                            return (
                                <tr key={product.id}>
                                    <td>{`${product.name} ${product.productName}`}</td>
                                    <td>{product.count}</td>
                                    <td>{product.price * product.count}</td>
                                    <td>
                                        <button className="remove" onClick={() => this.handleRemoveItem(index, product.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }

}