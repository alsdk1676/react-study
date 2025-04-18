import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './day06/router/router';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
          <Route path=':title' element={<Intro />}></Route>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
