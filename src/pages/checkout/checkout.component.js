import React from 'react';
import  './checkout.styles.scss';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import  {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = (props) => (

    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            props.cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            <div className='header-block'>
                <span style={{color: 'red'}}>Remove All Items</span>
            </div>
            <span>TOTAL: ${props.total}</span>
        </div>
        
        <StripeCheckoutButton price= {props.total} />
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal
}) 

export default connect(mapStateToProps)(CheckoutPage);