import React from 'react';
import data from '../data/data.json';
import './RecipeSteps.scss'
import clock from '../Assets/clock.png'
import fork from '../Assets/forkknife.png'

const RecipesSteps = () => {
  return (
      <div className="RecipesSteps">          
            <div className='d-flex'>
                <img className='clock icon mr-3' src={fork} alt="" />
                <div className="flex-column">
                    <p className='mb-1'>Yields</p>
                    <p>12 Servings</p>
                </div>
            </div>
            <div className='d-flex justify-content-between flex-md-column'>
                {data.map((data) => (
                        <div className='d-flex mb-2' key={data.id}>
                            <img className='clock mr-3' src={clock} alt="" />
                            <div className="flex-column">
                                <p className='caption my-0'>{ data.caption }</p>
                                <p className='name my-0'>{ data.time }</p>
                            </div>
                        </div>
                ))}                
            </div>          
      </div>
  )
}

export default RecipesSteps