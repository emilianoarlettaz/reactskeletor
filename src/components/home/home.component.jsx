import React from 'react';
import { Link } from 'react-router-dom';

const title = 'React Skeletor App';

const Home = () => (
  <div>
    <div className="title"><p>{title}</p></div>
    <div className="sub-title"><p>Click on the Demo to start</p></div>
    <div>
      <ul>
        <Link to="/demo"><li><p>Demo</p></li></Link>
      </ul>
    </div>
  </div>
);

export default Home;
