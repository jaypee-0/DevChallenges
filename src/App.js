import './App.scss';
import photo1 from './Assets/photo1.png'
import photo2 from './Assets/photo2.png'
import photo3 from './Assets/photo3.png'
import photo4 from './Assets/photo4.png'
import photo5 from './Assets/photo5.png'
import photo6 from './Assets/photo6.png'

function App() {
  return (
    <>
      <div id="App" className='my-5 m-auto py-4 container'>
          <div className="heading d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6">
              <h2>The Creative Crew</h2>
            </div>
            <div className="mt-2 text col-12 col-md-6">
              <h5 className='fw-bolder'>WHO WE ARE</h5>
              <p>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</p>
            </div>
          </div>
              <div className="images d-flex justify-content-evenly">
                <div className="col-6 col-md-4">
                  <div className='position-relative'>                  
                  <p className='position-absolute profession'>PRODUCT OWNER</p>
                  <img className="img-fluidX" src={photo1} alt="" />
                  <p className="name">Bill Mahoney</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className='position-relative'>
                  <p className='position-absolute profession professionMid'>ART DIRECTOR</p>
                  <img className="imageMiddle img-fluidX imageRightDown" src={photo2} alt="" />
                  <p className="name">Saba Cabrera</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className='position-relative'>
                  <p className='position-absolute profession'>TECH LEAD</p>
                  <img className="img-fluidX" src={photo3} alt="" />
                  <p className="name">Shae Le</p>
                </div>
                </div>                
                <div className="col-6 col-md-4 d-md-none">
                  <div className='position-relative'>
                  <p className='position-absolute profession professionMid'>UX DESIGNER</p>
                  <img className="imageRightDown img-fluidX" src={photo4} alt="" />
                  <p className="name">Skylah Lu</p>
                </div>
                </div>              
              </div>
              <div className="images d-flex">
                <div className="d-none d-md-block col-6 col-md-4">
                  <div className='position-relative'>
                  <p className='position-absolute profession '>UX DESIGNER</p>
                  <img className="img-fluidX" src={photo4} alt="" />
                  <p className="name">Skylah Lu</p>
                  </div>
                </div>                
                <div className="col-6 col-md-4">
                  <div className='position-relative'>
                  <p className='position-absolute profession profession5'>DEVELOPER</p>
                  <img className="imageMiddle5 img-fluidX" src={photo5} alt="" />
                  <p className="name">Griff Richards</p>
                </div>
                </div>                
                <div className="col-6 col-md-4">
                  <div className='position-relative'>
                  <p className='position-absolute profession profession6'>DEVELOPER</p>
                  <img className="img-fluidX imageRightDown" src={photo6} alt="" />
                  <p className="name">stan John</p>
                </div>
                </div>              
              </div>
      </div>      
      <footer className='py-3'>
      <p className='text-center'>created by <a href="https://bit.ly/jaypee-github" target="_blank" rel="noreferrer">Jaypee</a> - devChallenges.io</p>
      </footer>
    </>
  );
}

export default App;
