import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <div>Hello there</div>,
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router} ></RouterProvider>
    </div>
  );
}

export default App;
