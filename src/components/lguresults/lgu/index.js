import React from 'react';
import '../styles.scss';
import Button from './../../forms/button/Button';

export default function Lgu({name, sex, email}) {
    if(!name || !sex  || !email) return null;  

    const configAddToCartBtn = {
        type:'button'
    }
    return (
        <div className="lgu"> 
        <div className="thumbnail">
            <img src={email} alt={name}/>
        </div>
        <div className="details">
            <ul>
                <li>
                   <span className="name">
                    {name}
                   </span>
                </li>
                <li>
                   <span className="sex">
                    {sex}
                   </span>
                </li>
                <li>
                    <div className="addToCart">
                      <Button {...configAddToCartBtn}>
                        Add to Cart
                      </Button>
                    </div>
                </li>
            </ul>
        </div>
            
        </div>
    )
}
