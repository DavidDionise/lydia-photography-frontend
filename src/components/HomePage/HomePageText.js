import React from 'react';
import { HomePageIcons, ContactPageModal } from 'components';
import { browserHistory } from 'react-router';

class HomePageText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_contact_modal: false
    };
  }
  render() {
    return (
      <div className='overlay-text-outer-container'>
        <div className='overlay-text-inner-container'>
          <div className='name-container'>
            <h1><strong>LYDIACOURNOYER</strong></h1>
          </div>
          <div className='lifestyle-photographer-container'>
            <h3>LIFESTYLE PHOTOGRAPHER</h3>
          </div>
          <div
            className='contact-button'
            onClick={() => this.setState({ show_contact_modal: true })}
            >
            <p>Say Hello</p>
          </div>
        </div>
        <HomePageIcons />
        <ContactPageModal
          show={this.state.show_contact_modal}
          onHide={() => this.setState({ show_contact_modal: false })}
        />
      </div>
    );
  }
}

export default HomePageText;
