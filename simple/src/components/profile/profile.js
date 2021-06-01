import React from 'react';
import Classes from './profile.scss'; 
// import PropTypes from 'prop-types';

// profile.propTypes = {
    
// };
class MouseClick extends React.Component {
  // State
  state = {
    click: 0
  }

  // Phương thức thay đổi state
  incermentClick = () => {
    this.setState({
      click: this.state.click + 1
    });
  }

  render() {
    return <div className = "mouseClick">
    <h1>{this.state.click}</h1>
    <button onClick={this.incermentClick}>CLICK VÀO ĐÂY!</button>
    </div>;
  }
}
