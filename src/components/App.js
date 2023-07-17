import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './Main';
// import Quiz from './Quiz';
// import Result from './Result';
// const { CheckUserExist } = require('../helper/helper');


 
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={Main} />
//         <Route path="/quiz" element={() => <CheckUserExist><Quiz /></CheckUserExist>} />
//         <Route path="/result" element={() => <CheckUserExist><Result /></CheckUserExist>} />
//       </Routes>
//     </Router>
//   );
// }



// export default App;
