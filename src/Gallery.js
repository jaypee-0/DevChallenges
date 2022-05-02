import stats from './data/stats.json'
import './Gallery.scss';
import profilePhoto from './Assets/profilePhoto.png';
import photo1 from './Assets/photo1.png'
import photo2 from './Assets/photo2.png'
import photo3 from './Assets/photo3.png'
import photo4 from './Assets/photo4.png'
import photo5 from './Assets/photo5.png'
import photo6 from './Assets/photo6.png'

function Gallery() {
  return (
    <>
      <div className='py-2'>
        <div className='d-flex flex-column text-center my-4'>
          <img className='m-auto' src={profilePhoto} style={{ width: 120, height: 120 }} alt="" />
          <h3 className='fw-bold'>Rodney Cotton</h3>
          <p className="location fw-bold">Helsinki, Finland</p>
          <div className='d-flex m-auto'>
            {
              stats && stats.map( data => {
                return(
                  <div key={data.id} className="cardX mx-3 py-2 px-4 border border-2">
                    <h4 className='fw-bolder'>{data.numbers}</h4>
                    <p className='caption fw-bold'>{data.caption}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4"><img className="img-fluid" src={photo1} alt="" /></div>
            <div className="col-8"><img className="img-fluid" src={photo2} alt="" /></div>
          </div>
          <div className="row">
            <div className="col-8"><img className="img-fluid" src={photo3} alt="" />
            <div className='row'>
              <div className="col-6"><img className="img-fluid" src={photo6} alt="" />             
              </div>
              <div className="col-6"><img className="img-fluid" src={photo5} alt="" />             
              </div>
            </div>
            </div> 
            <div className='col-4'>
              <img className="photo4" src={photo4} alt="" />
            </div>
          </div>
        </div>
        <footer>
          <p className='text-center mt-5'>created by <a href="https://bit.ly/jaypee-github">Jaypee</a> - devChallenges.io</p>
        </footer>
      </div>
    </>
  );
}

export default Gallery;
