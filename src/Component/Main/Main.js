import React from 'react';
import './Main.css';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import Reserve from '../Reserve/Reserve';
import data  from '../../data';

const Main = () => {

  const iteratedReq = data.requirements.map(req => <li key={`${req} + ${Date.now()}`}>{req}</li>)
  const iteratedExp = data.experience.map(exp => <li key={`${exp} + ${Date.now()}`}>{exp}</li>)
  const iteratedIncl = data.includes.map(incl => <li key={`${incl} + ${Date.now()}`}>{incl}</li>)

  return (
    <section className="Main">
      <div className="main-div-reserve">
        <div className="main-div-info">
          <div className="main-title main-div">
            <h1>{data.name}</h1>
            <p>{data.accolade} &#8226; {data.location}</p>
            <button>Tags</button>
            <button>Tags</button>
            <button>Tags</button>
          </div>
          <div className="main-about main-div">
            <h3>About the Chef</h3>
            <p>{data.about}</p>
          </div>
          <div className="main-experience main-div">
            <h3>Experience</h3>
            <ul>
              {iteratedExp}
            </ul>
          </div>
          <div className="main-div">
            <h3>Booking Requirements</h3>
            <ul>
              {iteratedReq}
            </ul>
          </div>
          <div className="main-div">
            <h3>Meal Includes</h3>
            <ul>
              {iteratedIncl}
            </ul>
          </div>
        </div>
        <Reserve />
      </div>
      <ReviewContainer />
    </section>
  )
};

export default Main;