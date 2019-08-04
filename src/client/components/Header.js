import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log("Logged in :", auth);
  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
