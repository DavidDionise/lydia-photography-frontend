import React from 'react';

const Spinner = props => {
  const { size, color } = props;

  return (
    <div style={{ color: color || 'black' }}>
      <i className={`fa fa-circle-o-notch fa-spin fa-${size || 3}x fa-fw`} />
    </div>
  );
}

export default Spinner;
