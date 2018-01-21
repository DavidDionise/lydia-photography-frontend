import React from 'react';
import { FormInput, FormTextArea, Button, Spinner } from 'components';
import submitEmail from 'utils/submitEmail';
import { browserHistory } from 'react-router';

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email_address: '',
      subject: '',
      message: '',
      sending: false,
      sucess: false,
      error: false
    };

    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit() {
    this.setState({ sending: true });
    submitEmail(this.state)
    .then(() => this.setState({ success: true, sending: false }))
    .catch(e => {
      console.log(e);
      this.setState({ error: true, sending: false });
    });
  }

  render() {
    return (
      <div className='contact-page-container'>
        <div className='contact-form-container'>
          {this.state.error ? (
            <div>
              <p>There was an error... Please try to send your email later. Thank you.</p>
              <Button
                text='Back to Home Page'
                icon_class='fa fa-arrow-left'
                onClick={() => this.props.toggleShowContactModal(false)}
              />
            </div>
          ) : (
            this.state.success ? (
              <div>
                <p>Thank You For Getting In Touch!</p>
                <Button
                  text='Back to Home Page'
                  icon_class='fa fa-arrow-left'
                  onClick={() => this.props.toggleShowContactModal(false)}
                />
              </div>
            ) : (
              <div>
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
                <Button
                  text={'Submit'}
                  icon_class='fa fa-arrow-right'
                  onClick={this.handleClickSubmit}
                  >
                  <span>
                    {this.state.sending ? <Spinner size={2} color={'white'}/> : null}
                  </span>
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default ContactsPage;
