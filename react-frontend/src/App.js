import './app.css';

import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return <div>
      <Header />
      <div className="content">
        <TaskList />
      </div>
  </div>
}

export default App;