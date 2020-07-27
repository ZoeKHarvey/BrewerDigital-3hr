import React, {Component} from 'react';
import moment from 'moment';
import starImg from '../../assets/star.png';
import './Reviews.css';

class Reviews extends Component {

  formatName = function () {
    const fullName = this.props.rev.name
    const firstName = fullName.split(' ')[0]
    const names = fullName.split(' '),
        initials = names[1].substring(0, 1);
    return `${firstName} ${initials}.`;
};

  render() {
    const {review, timestamp} = this.props.rev;

    return(
      <section className="Reviews">
         <div>
            <div className="div-stars">
              <img src={starImg} alt="star" />
              <img src={starImg} alt="star"/>
              <img src={starImg} alt="star"/>
              <img src={starImg} alt="star"/>
              <img src={starImg} alt="star"/>
            </div>
          <h4>{this.formatName()}</h4>
          <p>{review}</p>   
          <p className="reviews-p-grey">Posted {moment(timestamp.replace(/"/g,'')).fromNow()}</p>
        </div>
      </section>
    )
  };
};


export default Reviews;