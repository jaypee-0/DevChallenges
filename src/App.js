import './App.scss'
import Navbar from './Components/Navbar'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import photo1 from './Assets/photo1.png'
import photo2 from './Assets/photo2.png'
import React from 'react'

function App() {
  return (
    <>
      <div id="App">
        <Navbar />
        <div className="mt-5 container d-flex flex-column justify-content-between flex-md-row">
          <div className="col-10 col-md-4 herotext mb-4">
            <div className=''>
            <h2 className='mb-4'>Modern interior</h2>
            <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
            </div>
            <p className='readmore'>Read more<FA className='pl-3' icon="arrow-right-long" /></p>
          </div>
          <div className="position-relative col-12 col-md-7">
            <img src={photo1} alt="" className="img-fluid" />
            <div className="position-absolute personal-card py-2 px-3 ">
              <div className="details mb-3 d-flex">
                <img src={photo2} alt="" className="personal-card-photo img-fluid" />
                <div className="flex-colum">
                  <div className="name">Aliza Webber</div>
                  <p>Interior designer</p>
                </div>
              </div>
              <h3 className='mb-3'>Designed in 2022 by Aliza Webber</h3>
            </div>
          </div>

        </div>
        <footer className='py-3'>
      <p className='text-center'>created by <a href="https://bit.ly/jaypee-github" target="_blank" rel="noreferrer">Jaypee</a> - devChallenges.io</p>
      </footer>
      </div>
    </>
  );
}

export default App;
