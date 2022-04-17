import React from 'react';
import Todo from '../Todo';
import styles from './App.module.sass';

function App() {
  return (
    <div className={styles.container}>
      <Todo />
    </div>
  );
}

export default App;
