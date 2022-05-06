import React from 'react';
import './Heading.scss';
import profile from '../../Assets/profilepic.jpg'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const Heading = () => {
  return (
      <div className="Heading cardBackground px-3 py-3">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-md-3 d-flex">
                <img className='m-auto col-5 col-md-12' src={profile} alt="" />
            </div>
            <div className="col-md-9 pl-md-3 d-md-flex flex-md-column">
                <div className="d-md-flex flex-md-row justify-content-md-between">
                    <div className="col-md-4 text-center text-md-left">
                        <h4 className='fw-bold'>Jaypee</h4>
                        <p>Front-end developer</p>
                    </div>
                    <div className="jaypeeemail col-md-5 text-center text-md-left">
                        <p className='flex-wrap'><FA className='pr-2' icon="fa-envelope" /> jaypeeeme@gmail.com</p>
                        <p className='number'><FA className='pr-2' icon="fa-phone" />(+234) 808 614 9495</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p>Self-motivated web developer, who is willing to learn and create outstanding  user-friendly web applications. 
                    </p>
                    <p>I am a Front-End developer seeking to add value as I desire to improve the quality of services and products by solving various problems on various projects. I am looking to spread my skills and enhance web development across different web-based devices using tools like Javascript.</p>
                </div>
            </div>

          </div>
      </div>
  )
}

export default Heading