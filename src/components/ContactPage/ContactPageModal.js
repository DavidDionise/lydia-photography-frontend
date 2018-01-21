import React from 'react';
import { Modal } from 'react-bootstrap';
import { ContactPage } from 'components';

class ContactPageModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        >
        <ContactPage toggleShowContactModal={this.props.toggleShowContactModal} />
      </Modal>
    );
  }
}

export default ContactPageModal;
