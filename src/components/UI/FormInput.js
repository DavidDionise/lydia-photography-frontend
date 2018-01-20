import React from 'react';

class FormInput extends React.Component {
  render() {
    const {
      container_class_name,
      onChange,
      value,
      placeholder,
      label
    } = this.props;

    return (
      <div className={`ui-theme-form-input-container ${container_class_name || ''}`}>
        <div className='ui-theme-input-wrap'>
          {label ? <span className='ui-theme-input-label'>{label}</span> : null}
          <input
            onChange={onChange}
            value={value}
            placeholder={placeholder || ''}
            className='ui-theme-input'
          />
          <span className='ui-theme-input-focused' />
        </div>
      </div>
    );
  }
}

export default FormInput;
