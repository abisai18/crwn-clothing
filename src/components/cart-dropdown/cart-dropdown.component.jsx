import React from 'react';

import CustomButtom from '../custom-button/custom-button.component';


import './cart-dropdown.style.scss'


const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className="cart-items" />
        <CustomButtom>CHECKOUT</CustomButtom>        
    </div>
);

export default CartDropDown;
