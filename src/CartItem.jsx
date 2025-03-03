import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onItemRemove  }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future references');
  };
  const handleContinueShopping = () => {
    onContinueShopping(); // Call function passed from parent
  };
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ 
      name: item.name, 
      quantity: item.quantity + 1 
    }));

  };
  const handleDecrement = (item) => {
     if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ 
        name: item.name, 
        quantity: item.quantity - 1 
      }));
    }

  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    if (onItemRemove) {
      onItemRemove(item.name); // Call the callback to update addedToCart state
  }
  };

  // Calculate total cost based on quantity for an item
  // const calculateTotalCost = (item) => {
  //   const tt = (item.cost * item.quantity);
  //   //console.log(item.cost , item.quantity);
  //   return tt;
  // };

  // Calculate total amount for all products in the cart
  // const calculateTotalAmount = () => {
  //   let totalAmount = 0;
  //   cart.forEach(item => {
  //     totalAmount += item.cost * item.quantity;
  //   });
  //   return totalAmount;
  // };

    // Remove '$' and convert to number 
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return cost * item.quantity;
};
//****** */
const calculateTotalAmount = () => {
  let totalAmount = 0;
  cart.forEach(item => {
      // Remove '$' and convert to number
      const cost = parseFloat(item.cost.replace('$', ''));
      totalAmount += cost * item.quantity;
  });
  return totalAmount.toFixed(2); // Format to 2 decimal places
};


  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

