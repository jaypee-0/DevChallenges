import React from "react";
import Navbar from './Components/Navbar';
import './App.scss';
import heroImage from './Assets/heroImage.jpg';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import smartHome from './Assets/smarthome.jpg';
import onBoard from './Assets/onboard.png';
import juiceProduct from './Assets/juice-product.png'
import booking from './Assets/booking.png'
import person1 from './Assets/person1.png'
import person2 from './Assets/person2.png'
import person3 from './Assets/person3.png'
import person4 from './Assets/person4.png'
import instagram from './Assets/instagram.svg'
import linkedin from './Assets/linkedin.svg'
import twitter from './Assets/twitter.svg'


function App() {
  return (
    <div>
      <Navbar />
      <div className="container App">
        <div className="d-flex firstText my-3 flex-column col-11">
          <p className="p-blue">Unhappy with your website?</p>
          <h5 className="mb-0">We create beautiful</h5>
          <h5>and fast web services</h5>
        </div>
          <img className="heroimage img-fluid" src={heroImage} alt="" />
          <div className="secondText mt-5 d-flex flex-column col-11 col-sm-6 col-md-8 col-lg-4">
          <h5 className="mb-0">Story, emotion</h5>
          <h5>and purpose</h5>
          <p className="mt-4">We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
          <form className="position-relative mb-5 d-flex flex-column">
            <label className="mb-3">Want us to contact you?</label>
            <input type="email" placeholder="Email" className="py-3 pl-3" />
            <button className="position-absolute px-3 py-2 button">Join</button>
          </form>
          </div>
          <div className="thirdText mt-5">
            <h3>We offer high</h3>            
            <h3 className="mb-5 ">demand services</h3>
            <div className="cardSection mt-4 d-flex flex-column flex-md-row justify-content-evenly">
              <div className="px-4 py-2 cardex col-12 col-md-4 col-lg-3 gap-3">
                <button className="px-3 py-3 iconFABlue"><FA icon="fa-pencil" /></button>
                <h4>UI/UX Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor tenetur, voluptates doloribus est deleniti facilis doloremque.</p>
                <button className="py-2 px-2 mt-2">Get started</button>
              </div>
              <div className="px-4 py-3 cardex card3 col-12 col-md-4 col-lg-3 gap-3">
                <button className="px-3 py-3 iconFAGreen"><FA icon="fa-code" /></button>
                <h4>UI/UX Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor tenetur, voluptates doloribus est deleniti facilis doloremque.</p>
                <button className="button-blue py-2 px-2 mt-2">Get started</button>
              </div>
              <div className="px-4 py-3 cardex col-12 col-md-4 col-lg-3 gap-3 mb-4">
                <button className="px-3 py-3 iconFARed"><FA icon="fa-bars-progress" /></button>
                <h4>UI/UX Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor tenetur, voluptates doloribus est deleniti facilis doloremque.</p>
                <button className="py-2 px-2 mt-2">Get started</button>
              </div>
            </div>
          </div>
          <div className="fourthText mt-5">
            <h3 className="mb-0">Good design means</h3>            
            <h3>good business</h3>
            <div className="d-flex flex-column gap-3 flex-md-row">
              <div className="imgMt6 col-12 col-md-6">
                <img src={smartHome} alt="" />
                 <p>Full stack application</p> 
                 <h5>Smart home Dashboard</h5>
              </div>
              <div className="col-12 col-md-6">
                <img src={onBoard} alt="" />
                 <p>UX/UI design</p> 
                 <h5>Onboard application</h5>              
              </div>
            </div>
            <div className="d-flex flex-column gap-3 flex-md-row">
              <div className="imgMt6 col-12 col-md-6">
                <img src={booking} alt="" />
                 <p>Mobile application</p> 
                 <h5>Booking system</h5>
              </div>
              <div className="col-12 col-md-6">
                <img src={juiceProduct} alt="" />
                 <p>Front End application</p> 
                 <h5>Juice product homepage</h5>              
              </div>
            </div>
            <div className="text-right">
            <button className="seemore border-0">see more <FA className="ml-2" icon="fa-arrow-right-long" /></button>              
              </div>
          </div>
          {/* Fifth Text */}
          <div className="my-5 pb-5 fifthText">
            <div className="d-flex flex-column flex-md-row">
              <div className="col-12 col-md-5 align-self-center">
                <h5>Meet the team</h5>
                <h2>We are chilled</h2>
                <h2>and a laidback</h2>
                <h2>team</h2>
                <p className="mt-2 mb-0">Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipisicing elit. Expedita, sit.</p>
              </div>
              <div className="col-12 col-md-7">
                <div className="d-flex flex-row ">
                  <div className="col-7 d-flex justify-content-md-end align-self-center">
                    <img className="img-fluid4" src={person3} alt="" />
                  </div>
                  <div className="col-5">
                    <div className="d-flex flex-column">                     
                    <img className="mb-2 img-fluid" src={person1} alt="" />
                    <img className="mt-2 img-fluid" src={person2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sixth Text */}
          <div className="sixthText mt-5">
            <div className="d-flex flex-column col-12 col-md-7">
              <h4>“Fast and outstanding resutls. Edie understands their customer’s needs.<br />They have a young and talented team.”</h4>
              <div className="d-flex flex-row">
                <img src={person4} alt="" className="carlos" />
                <div className="d-flex ml-3 flex-column align-self-center">
                  <h5>Carlos Tran</h5>
                  <p className="mb-0">The Decorate Gatsby</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <footer className="mt-5 pt-5">
        <div className="mb-5 container d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-sm-3">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Our Works</li>
              <li>Clients</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-12 col-sm-3">
            <header>Edie</header>
            <div className="d-flex socialIcons flex-row">
              <img src={instagram} alt="" />
              <img className="mx-2" src={linkedin} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="col-10 col-md-3">
          <form className="position-relative   d-flex flex-column">
            <label className="mb-3">Want us to contact you?</label>
            <input type="email" placeholder="Email" className="py-3 pl-3" />
            <button className="position-absolute px-4 py-2 button">Join</button>
          </form>
          </div>
        </div>
        <div className="footerx">
          <p className='text-center pb-4 mb-0'>created by <a href="https://bit.ly/jaypee-github">Jaypee</a> - devChallenges.io</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
