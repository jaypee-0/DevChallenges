import './App.scss';
import error404 from "./Assets/Scarecrow.png"

function App() {
  return (
    <div className="container">
      <header className='pt-3'>404 NOT FOUND</header>
      <div id="def" className='d-flex flex-column vh-80 flex-md-row'>
        <div className='col-12 col-md-6 m-auto'>
          <img className='px-2 img-fluid' src={error404} alt="" />
        </div>
        <div className='col-12 col-md-6 m-auto'>
          <h2>I have bad news for you</h2>
          <p className='py-4'>The page you are looking for might be removed or is temporarily unavailable</p>
          <button className='py-3 px-4'>BACK TO HOMEPAGE</button>
        </div> 
      </div>       
      <footer className='text-center bottom-0 position-relative'>
        created by <span>
        <a
          href="https://bit.ly/jaypee-github"
          target="_blank"
          rel="noopener noreferrer"
        >Jaypee</a></span> - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
