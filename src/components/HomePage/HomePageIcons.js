import React from 'react';

class HomePageIcons extends React.Component {
  render() {
    return (
      <div className='homepage-icons-container'>
        <a
          href={INSTAGRAM_URL}
          target='_blank'
          style={{ color: 'white' }}
          >
          <i className='fa fa-instagram'/>
        </a>
      </div>
    );
  }
}

export default HomePageIcons;
