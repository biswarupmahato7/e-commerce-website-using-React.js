import "./CartItem.scss";
import {MdClose} from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
import "../../../utils/context"
import { Context } from "../../../utils/context";


const CartItem = () => {
    const { cartItems, handelRemoveFromCart,handelCartProductQuantity } =
     useContext(Context);

    return (
        <div className="cart-products"> 
          {cartItems.map(item =>(
             <div key = {item.id} className="cart-product">
             <div className="img-container">
                 <img src={process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url} alt="" />
             </div>
             <div className="prod-details">
                 <span className="name">{item.attributes.title}</span>
                 <MdClose className="close-btn" onClick={() => handelRemoveFromCart(item)}/>
                 <div className="quantity-buttons">
                     <span onClick={() => handelCartProductQuantity('dec', item)}>-</span>
                     <span>{item.attributes.quantity}</span>
                     <span  onClick={() => handelCartProductQuantity('inc', item)}>+</span>
                 </div>
                 <div className="text">
                     <span>{item.attributes.quantity}</span>
                     <span>x</span>
                     <span className="highlight"> &#8377; {item.attributes.price * item.attributes.quantity}</span>
                 </div>
             </div>
           </div>
          ))}
          
          
          {/* <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span className="highlight"> &#8377; 1234</span>
                </div>
            </div>
          </div> */}


         </div>
    )
}

export default CartItem;
