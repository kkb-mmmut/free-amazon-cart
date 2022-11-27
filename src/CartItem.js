import React from 'react'; 
//class CartItem extends React.Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     price: 999,
  //     title: 'Mobile Phone',
  //     qty: 1,
  //     img: ''
  //   } 
  // }
  // increaseQuantity = () => {
  //   //console.log('this', this.state);
  //   this.setState({
  //       qty:this.state.qty+1,
  //       price:this.state.price+this.state.price
  //   });
    // another type to change the state in the function.
    // this.setState((prevState)=>{
    //     return{
    //         qty:prevState.qty+1
    //     }
    // });
  // }
  // decreaseQuantity=()=>{
  //   const {qty}=this.state;
  //   if(qty===0)
  //   {
  //       return;
  //   }
  //       this.setState((prevState)=>{
  //           return{
  //               qty:prevState.qty-1,
  //               price:prevState.price-(prevState.price/prevState.qty)
  //           }
  //       }); 
  // } import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img } alt={"images"}/>
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/3114/3114824.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/5698/5698450.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/8695/8695643.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
} 
const styles = {
  image: {
    height: 110,
    width: 110, 
    background: '#ccc'
  }
}

export default CartItem;