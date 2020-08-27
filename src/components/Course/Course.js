import React from 'react';
import data from '../../FakeData/FakeData'
import { useState } from 'react';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    const [course,setUser]=useState(data);
    const[cart,setCart]=useState([]);
    const handleAddproduct=(course)=>{
        const newCart=[...cart,course] ;
         setCart(newCart);   
    }
    return (
      
        <div className="main-container">
                <div className="course-container">
                      {
                          course.map(pd=> <Product 
                            handleAddproduct={handleAddproduct}
                            course={pd}
                            ></Product> )
                      }
                  
                </div>
                <div calssName="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

        </div>
        
              
    );
};

export default Course;