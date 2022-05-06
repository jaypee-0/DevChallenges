import React, { useState } from 'react'
import './Projects.scss';
import inferior from '../../Assets/inferior.png';
import myteam from '../../Assets/my-team.png';
import baseApparel from '../../Assets/baseApparel.png';
import edie from '../../Assets/edie.png';
import gotour from '../../Assets/gotour.jpg';
import lendsqr from '../../Assets/lendsqr.png';

const Projects = () => {
    const [counter, setcounter] = useState(1)
    const [showFront, setshowFront] = useState(true);
    const [showdev, setshowdev] = useState(false);
    const [others, setothers] = useState(false);

    const handleFront = () => {
        setcounter(1);
        setshowFront(true);
        setshowdev(false);
        setothers(false);
    }
    const handleDev = () => {
        setcounter(3);
        setshowFront(false);
        setshowdev(true);
        setothers(false);
    }
    const handleOthers = () => {
        setcounter(2);
        setshowFront(false);
        setshowdev(false);
        setothers(true);
    }

  return (
    <div className='projects'>
    <div className="projectSelector px-3 py-1 mt-4 cardBackground">
        <h3>Projects({counter})</h3>
        <div className="d-flex flex-row">
            <ul className='pl-0'>
                <button className='mr-3 py-2 px-3 border-1 rounded-pill' onClick={handleFront}>FrontendMentor</button>
                <button className='mr-3 py-2 px-3 border-1 rounded-pill' onClick={handleDev}>Devchallenges</button>
                <button className=' py-2 px-3 border-1 rounded-pill' onClick={handleOthers}>Others</button>
            </ul>
        </div>  
    </div>
    {showdev && (
        <div className='d-flex flex-column flex-md-row'>
        <div className="projects px-3 mr-md-4 py-3 mt-4 col-12 col-md-3 cardBackground">
            <img className='img-fluid' src={inferior} alt="" />
            <p className='mt-2 techStack'>#React #Javascript #SCSS</p>
            <h2>Interior Consultant</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi quaerat voluptatum consectetur necessitatibus, rem natus ut perspiciatis quibusdam! Pariatur!</p>
            <div className="d-flex justify-content-between">
                <button className='demo px-4 py-2'><a href="https://interior-consultant-jaypee.netlify.app/">Demo</a></button>
                <button className='code px-4 py-2'><a href="https://github.com/jaypee-0/DevChallenges-Responsive-Developer/tree/INTERIOR-CONSULTANT">Code</a></button>
            </div>
        </div>
        <div className="projects px-3 py-3 mr-md-4 mt-4 col-12 col-md-3 cardBackground">
            <img className='img-fluid' src={myteam} alt="" />
            <p className='mt-2 techStack'>#HTML #SCSS #Bootstrap</p>
            <h2>My Team Page</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi quaerat voluptatum consectetur necessitatibus, rem natus ut perspiciatis quibusdam! Pariatur!</p>
            <div className="d-flex justify-content-between">
                <button className='demo px-4 py-2'><a href="https://jaypee-0.github.io/base-apparel-coming-soon/">Demo</a></button>
                <button className='code px-4 py-2'><a href="https://github.com/jaypee-0/DevChallenges-Responsive-Developer/tree/MY-TEAM">Code</a></button>
            </div>
        </div>
        <div className="projects px-3 py-3 mt-4 col-12 col-md-3 cardBackground">
            <img className='img-fluid' src={edie} alt="" />
            <p className='mt-2 techStack'>#React #Bootstrap #Javascript #SCSS</p>
            <h2>Edie landingpage</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi quaerat voluptatum consectetur necessitatibus, rem natus ut perspiciatis quibusdam! Pariatur!</p>
            <div className="d-flex justify-content-between">
                <button className='demo px-4 py-2'><a href="https://edie-homepage-jaypee.netlify.app/">Demo</a></button>
                <button className='code px-4 py-2'><a href="https://github.com/jaypee-0/DevChallenges-Responsive-Developer/tree/EDIE-HOMEPAGE">Code</a></button>
            </div>
        </div>          
        </div>
        
    )} 
    {showFront && (
        <div className="projects px-3 py-3 mt-4 col-12 col-md-3 cardBackground">
        <img className='img-fluid' src={baseApparel} alt="" />
        <p className='mt-2 techStack'>#HTML #Bootstrap #CSS</p>
        <h2>Coming Soon Page</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi quaerat voluptatum consectetur necessitatibus, rem natus ut perspiciatis quibusdam! Pariatur!</p>
        <div className="d-flex justify-content-between">
            <button className='demo px-4 py-2'><a href="https://jaypee-0.github.io/base-apparel-coming-soon/">Demo</a></button>
            <button className='code px-4 py-2'><a href="https://github.com/jaypee-0/base-apparel-coming-soon">Code</a></button>
        </div>
    </div>
    )}
    {others && (
        <div className="d-flex flex-column flex-md-row">
        <div className="projects px-3 mr-md-4 py-3 mt-4 col-12 col-md-3 cardBackground">
            <img className='img-fluid' src={gotour} alt="" />
            <p className='mt-2 techStack'>#React #SCSS #Bootstrap #JavaScript</p>
            <h2>Go Tour</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi quaerat voluptatum consectetur necessitatibus, rem natus ut perspiciatis quibusdam! Pariatur!</p>
            <div className="d-flex justify-content-between">
                <button className='demo px-4 py-2'><a href="https://jazzy-monstera-1358e1.netlify.app/">Demo</a></button>
                <button className='code px-4 py-2'><a href="https://github.com/jaypee-0/gotour">Code</a></button>
            </div>
        </div>
        <div className="projects px-3 py-3 mt-4 col-12 col-md-3 cardBackground">
            <img className='img-fluid' src={lendsqr} alt="" />
            <p className='mt-2 techStack'>#React #SCSS #Bootstrap #JavaScript</p>
            <h2>Lendsqr Dashboard</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi quaerat voluptatum consectetur necessitatibus, rem natus ut perspiciatis quibusdam! Pariatur!</p>
            <div className="d-flex justify-content-between">
                <button className='demo px-4 py-2'><a href="https://whimsical-gecko-9c9f53.netlify.app/">Demo</a></button>
                <button className='code px-4 py-2'><a href="https://github.com/jaypee-0/lendsqr">Code</a></button>
            </div>
        </div>
        </div>
    )}    
    </div>
  )
}

export default Projects