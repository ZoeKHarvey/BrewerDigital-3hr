import React from 'react';
import './Reserve.css';

const Reserve = () => {

  return (
    <section className="Reserve">
      <div className="reserve-div-header">
        <p><span>$000 </span>per person</p>
        <div>
          <div className="reserve-div-img"></div>
          <span>4.9</span>
        </div>
      </div>
      <div className="reserve-div-form">
        <input placeholder="Date"/>
        <input placeholder="Location"/>
        <input placeholder="Headcount" />
      </div>
      <div className="reserve-div-calc">
        <div>
          <p>$000 x 8</p>
          <p>$000</p>
        </div>
        <div>
          <p>Non-Refundable Deposit</p>
          <p>$000</p>
        </div>
        <div className="reserve-div-total">
          <p>Total</p>
          <p>$000</p>
        </div>
      </div>
      <button>Reserve and Pay Deposit</button>
      <p>By contining you agree to our <span>Terms and Conditions</span></p>
    </section>
  )
};

export default Reserve;