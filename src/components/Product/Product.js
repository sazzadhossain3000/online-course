import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const {image,name,description,price}=props.course;
    
    return (
        <div className="course">
            <div>
                <img src={image} alt=""/>
            </div>
             <div calssName="details">
                <h4 calssName="Product-name">{name}</h4>
                <p>{description}</p>
                <p>Price:${price}</p>
                <button className="main-button"
                     onClick={()=>props.handleAddproduct(props.course)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>

            </div>
           
         </div>
    );
};

export default Product;