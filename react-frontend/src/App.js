import './app.css';

import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskView from './components/TaskView';
import { Routes, Route } from 'react-router-dom';

function App() {
  return <div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskCreate />} />
          <Route path="/edit/:id" element={<TaskEdit />} />
          <Route path="/view/:id" element={<TaskView />} />
        </Routes>
      </div>
  </div>
}

export default App;