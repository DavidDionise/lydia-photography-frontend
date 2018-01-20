import React from 'react';
import { FormInput, FormTextArea, Button } from 'components';
import submitEmail from 'utils/submitEmail';

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email_address: '',
      subject: '',
      message: ''
    };

    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit() {
    console.log('hit');
    submitEmail(this.state)
    .then(res => console.log('res = ', res))
  }

  render() {
    return (
      <div className='contact-page-container'>
        <div className='contact-form-container'>
          <FormInput
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
            placeholder='Enter Your Name'
            label='Name'
          />
          <FormInput
            onChange={e => this.setState({ email_address: e.target.value })}
            value={this.state.email_address}
            placeholder='Enter Your Email Address'
            label='Email'
          />
          <FormInput
            onChange={e => this.setState({ subject: e.target.value })}
            value={this.state.subject}
            placeholder='Enter A Subject'
            label='Email Subject'
          />
          <FormTextArea
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
            placeholder='Enter A Message'
            label='Message'
          />
        </div>
        <Button
          text={'Submit'}
          icon_class='fa fa-arrow-right'
          onClick={this.handleClickSubmit}
        />
      </div>
    );
  }
}

export default ContactsPage;
