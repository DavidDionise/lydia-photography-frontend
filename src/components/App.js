import React from 'react';

import './styles.scss';
console.log('env = ', NODE_ENV);

const App = props => {
  return (
    <div className='app-continer'>
      {props.children}
    </div>
  )
}

export default App;
