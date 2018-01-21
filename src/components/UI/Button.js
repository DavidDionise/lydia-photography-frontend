import React from 'react';

class Button extends React.Component {
  render() {
    const {
      text,
      icon_class,
      onClick,
      children
    } = this.props;
    return (
      <div className='ui-theme-button-container' onClick={onClick}>
        <button className='ui-theme-button'>
          <span>
            {text || ''}
            {icon_class ? <i className={icon_class} /> : null}
          </span>
          {children}
        </button>
      </div>
    );
  }
}

export default Button;
