import React from 'react';
import './styles.scss';

const App = props => {
  return (
    <div className='app-continer'>
      {props.children}
    </div>
  )
}

export default App;
