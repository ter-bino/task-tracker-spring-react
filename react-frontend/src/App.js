import './app.css';
import 'react-toastify/dist/ReactToastify.css'

import React from 'react';
import Header from './components/Header';
import TaskList from './pages/TaskList';
import TaskCreate from './pages/TaskCreate';
import TaskEdit from './pages/TaskEdit';
import TaskView from './pages/TaskView';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
  </div>
}

export default App;