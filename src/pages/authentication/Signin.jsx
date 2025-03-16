import React from 'react';
import './Signup.css';
import Footer from '../../components/Footer.jsx';

const Signup = () => {
  return (
    <div className="container">
      <form action="/login">
        <h1>Sign Up</h1>
        <div>
          <div>
            <label htmlFor="student-id">STUDENT ID</label>
            <input type="text" id="student-id" />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" />
          </div>
          <div>
            <label htmlFor="strand">STRAND</label>
            <select id="strand">
              <option>STEM</option>
              <option>HUMMS</option>
              <option>ICT</option>
              <option>GAS</option>
              <option>ABM</option>
              <option>TOP</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;