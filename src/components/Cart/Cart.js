import React from 'react';

const Cart = (props) => {

    const cart=props.cart;
    //const totalPrice=cart.reduce((total,pro)=> total+ cart.price ,0);
    let total=0;
    for(let i=0;i<cart.length;i++){
         const product=cart[i];
         total=(total+product.price);
         
    }
    const tax=total/10;
    let grandTotal=total+tax;
     const formateNumber=number=>{
         const precision=number.toFixed(2);
         return Number(precision);

     }
    return (
        <div>
            <h3>Order Summaey</h3>
            <p>Course order:{cart.length}</p>
            <p>Total Price:{formateNumber(total)}</p>
            <p><small>Tax and vat :{formateNumber(tax)}</small></p>
             <h4>Grand Total :{formateNumber(grandTotal)}</h4>
        </div>
    );
};

export default Cart;