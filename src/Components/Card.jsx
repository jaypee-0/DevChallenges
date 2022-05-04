import React from 'react'
import photo1 from '../Assets/photo1.png'
import photo2 from '../Assets/photo2.png'
import { useState } from 'react'

const Card = () => {
    const [increment, setIncrement] = useState(0);
    const handleIncrease = () => {
        setIncrement(increment +1);
    }
    const handleDecrease = () => {
        setIncrement(increment -1);
    }
  return (
    <div className='CARD'>
        <div className="d-flex flex-row py-3 px-4">
            <img className='img-fluid-60 rounded-pilled' src={ photo1 } alt="" />
            <div className="ml-4 text flex-column w-100">
                <h5 className='fw-bolder'>Vintage Backbag</h5>
                <p><span className='firstPrice'>$54.99 </span><span className='secondPrice'> <del>$94.99</del></span></p>
                <div className='d-flex btn-container justify-content-between px-2 py-2 w-75'>
                    <button onClick={handleDecrease} className='px-2 fw-bold'>-</button>
                    <span>{increment}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
        <div className="d-flex flex-row py-3 px-4">
            <img className='img-fluid-60' src={ photo2 } alt="" />
            <div className="ml-4 text flex-column w-100">
                <h5 className='fw-bolder'>Levi Shoes</h5>
                <p><span className='firstPrice'>$74.99 </span><span className='secondPrice'> <del>$124.9</del>9</span></p>
                <div className='d-flex btn-container justify-content-between px-2 py-2 w-75'>
                    <button onClick={handleDecrease} className='px-2 fw-bold'>-</button>
                    <span>{increment}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
        <div className='mt-5 px-4 py-3'>
            <hr/>
            <div className="fw-bolder d-flex justify-content-between">
                <p>Shipping</p>
                <p>$19</p>
            </div>
            <hr/>
            <div className="fw-bolder d-flex justify-content-between">
                <p>Total</p>
                <p>$148.98</p>
            </div>
        </div>
    </div>
    
  )
}

export default Card