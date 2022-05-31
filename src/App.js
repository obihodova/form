import React from 'react';
import  styles from './App.module.css';
import Form from './components/Form';

class App extends React.Component {
  

  render() {
    return (
      <div className={styles.app}>
       <Form></Form>
      </div>
    )
  }

}

export default App;
