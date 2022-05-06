import React from 'react'
import data from '../../data/hobbies.json'
import './SkillsHobbies.scss'
import huawei from '../../Assets/huawei.png'
import kodecamp from '../../Assets/kodecamp.png'
import voluntaire from '../../Assets/voluntaire.png'

const SkillsHobbies = () => {
  return (
    <div className='skillsHobbies d-flex flex-column flex-md-row'>
    <div className='d-flex flex-column col-md-4'>
      {/* Skills */}
    <div className="Skills cardBackground px-3 py-3 mt-4 col-12">
      <h3>Skills</h3>
      <div className="d-flex flex-row">
        <div className="col-5">
          <ul className="skills pl-0">
            <li className='list-unstyled'>Git</li>
            <li className='list-unstyled'>SCSS</li>
            <li className='list-unstyled'>Bootstrap 5</li>
            <li className='list-unstyled'>React</li>
            <li className='list-unstyled'>NodeJs</li>
            <li className='list-unstyled'>MongoDB</li>
          </ul>
        </div>
        <div className="col-6">
        <ul className="pl-0">
          <div className='progress mb-2'>
          <li className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemax="100" aria-valuemin="0"></li>
          </div>
          <div className='progress mb-2'>
          <li className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemax="100" aria-valuemin="0"></li>
          </div>
          <div className='progress mb-2'>
          <li className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemax="100" aria-valuemin="0"></li>
          </div>
          <div className='progress mb-2'>
          <li className="progress-bar w-85" role="progressbar" aria-valuenow="95" aria-valuemax="100" aria-valuemin="0"></li>
          </div>
          <div className='progress mb-2'>
          <li className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemax="100" aria-valuemin="0"></li>
          </div>
          <div className='progress mb-2'>
          <li className="progress-bar w-60" role="progressbar" aria-valuenow="75" aria-valuemax="100" aria-valuemin="0"></li>
          </div>
        </ul>
        </div>
      </div>
    </div>
    {/* Hobbies */}
    <div className="Hobbies cardBackground px-3 py-3 mt-4 col-12">
      <h3>Hobbies</h3>
      {data.map((data) => (
        <div key={data.id}>
          <img className='img-fluid' src={data.image} alt="" />
          <h3 className='mt-2'>{data.name}</h3>
          <p>{data.caption}</p>
        </div>
      ))}
    </div>
    </div>
    {/* Blog Section */}
    <div className='d-flex flex-column col-md-8 pl-md-4'>
      {/* Blog */}
    <div className="Blog cardBackground px-3 py-3 mt-4 col-12">
      
      <h3 className='fw-bold '>Twitter</h3>
      <div className="d-flex flex-column flex-md-row">
      <div className="text-left col-10 col-md-5">
      <h2 className='fw-bolder'>Day 8</h2>
      <h5>8-Day streak of website programming from <a href="https://devchallenges.io/paths/responsive-web-developer">devchallenges.io</a></h5>
      <p className="mt-5">
        So, I decided to take a personal challenge by coding each challenge a day from responsive developer path on devchallenges. Thus far, it's been wonderful.
      </p>
      <p>Started with the first challenge and I am glad to say I have completed the path to a responsive developer on devchallenges. So I guess, up to the next phase.</p>
      <p>Front-end developer challenge here I come.</p>
      </div>
      <div className="col-12 ml-lg-auto pr-3 col-md-5">      
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">So I&#39;ve decided to start a personal challenge 🤧<br/><br/>My goal is to code one website daily from <a href="https://t.co/67X27QaAyc">https://t.co/67X27QaAyc</a>. <a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> <a href="https://twitter.com/hashtag/react?src=hash&amp;ref_src=twsrc%5Etfw">#react</a> <a href="https://twitter.com/hashtag/frontend?src=hash&amp;ref_src=twsrc%5Etfw">#frontend</a></p>&mdash; The Mercenary (@Jay9ee_) <a href="https://twitter.com/Jay9ee_/status/1519793837346017280?ref_src=twsrc%5Etfw">April 28, 2022</a></blockquote>
      </div>
      <p className="bottom"></p>
      </div>
    </div>
    {/* Experience */}
    <div className="Experience cardBackground px-3 py-3 mt-4 col-12">
      <div className="text">
      <h2 className='mb-5'>Experiences</h2>
      <div className="d-flex justify-content-between col-md-11">
        <div className='col-4 col-sm-3'>        
        <img className="img-fluid" src={huawei} alt="" />
        </div>
        <div className="experiencetexts col-7 col-sm-8">
          <p className="date">Mar/2021 - October/2021</p>
          <h5 className="position">Network Engineer</h5>
          <p className="work">I worked as a network enginner, using Javascript to contribute to the daily activities of the company's progress.</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2 col-md-11">
        <div className='col-4 col-sm-3'>        
        <img className="img-fluid" src={kodecamp} alt="" />
        </div>
        <div className="experiencetexts col-7 col-sm-8">
          <p className="date">Oct/2021 - Present</p>
          <h5 className="position">Frontend/Backend Intern</h5>
          <p className="work">I interned as a frontend developer where I honed my skills in various frontend languages, reactjs. Particpated again in the ongoing cohort as a backend developer to honed my familiarity with backend development</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2 col-md-11">
        <div className='col-4 col-sm-3 align-self-center'>        
        <img className="img-fluid" src={voluntaire} alt="" />
        </div>
        <div className="experiencetexts col-7 col-sm-8">
          <p className="date">Mar/2022 - Present</p>
          <h5 className="position">Web Developer</h5>
          <p className="work">A volunteer marketplace, helping those displaced by the invasion of Ukraine. Currently working with the team to help citizens of Ukranians</p>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SkillsHobbies;