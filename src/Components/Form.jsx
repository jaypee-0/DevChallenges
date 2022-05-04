import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Form = () => {
    
  return (
    <div className='form'>
        <h3 className='fw-bold mt-3'>Contact Information</h3>
        <form className='mb-3 d-flex flex-column'>
            <div className='d-flex flex-column position-relative'>
            <label>E-mail</label>
            <input type="email" placeholder='Enter your email...'/>
            <FA className='position-absolute' icon="fa-envelope" />
            </div>
            <div className='d-flex flex-column position-relative'>
            <label>Phone</label>
            <input type="text" placeholder='Enter your phone number...'/> 
            <FA icon="fa-phone" />
            </div>
           {/* Shipping form field */}         
           <h3 className='mt-4 fw-bold'>Shipping Address</h3>
           <div className='d-flex flex-column position-relative'>
            <label>Full name</label>
            <input type="text" placeholder='Rodney Cotton'/>
            <FA icon="fa-circle-user" />
            </div>
            <div className='d-flex flex-column position-relative'>
            <label>Address</label>
            <input type="text" placeholder='Your Address'/>
            <FA icon="fa-house" />
            </div>
            <div className='d-flex flex-column position-relative'>
            <label>City</label>
            <input type="text" placeholder='Your city...'/>
            <FA icon="fa-city" />
            </div>
            <div className="d-flex justify-content-between gap-2">
                <div className='position-relative d-flex flex-column col-6'>
                    <label>Country</label>
                    <select>
                        <option value=""></option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Israel">Israel</option>
                        <option value="Saint Georgia">Saint Georgia</option>
                    </select>
                    <FA icon="fa-earth-africa" />
                </div>
                <div className='position-relative d-flex flex-column col-6'>
                    <label>Postal Code</label>
                    <input type="text" placeholder='Your postal code...'/>
                    <FA icon="fa-inbox" />
                </div>
            </div>
            <p className='align-middle'><input className="align-middle mr-2 form-check-input" type="checkbox" value="" id="flexCheckDefault" />Save this information for next time</p>
            <button className='py-2 px-4'>Continue</button>
        </form>
    </div>
  )
}

export default Form