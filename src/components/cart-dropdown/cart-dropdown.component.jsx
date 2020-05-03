import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toogleCartHidden} from '../../redux/cart/cart.actions';


import './cart-dropdown.style.scss'


const CartDropDown = ({ cartItems , history , dispatch}) => 
(
    <div className='cart-dropdown'>
        <div className="cart-items" >
            {
               cartItems.length ?  
                (
                    cartItems.map(cartItem => 
                        (<CartItem key={cartItem.id} item={cartItem} />)
                    )
                ) : (<span className="empty-message">Your cart is empty</span>)   
            }
        </div>
        <CustomButtom onClick={ () => {
                history.push('/checkout');
                dispatch(toogleCartHidden())
                } }>CHECKOUT</CustomButtom>        
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
});


export default withRouter(connect(mapStateToProps,null)(CartDropDown));
