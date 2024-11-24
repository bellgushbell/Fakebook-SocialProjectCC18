import { Outlet } from 'react-router-dom';
import Header from './components/Header';


import './Index.css'

function App() {
  return (


    <div className="min-h-screen bg-yellow-100">
      <Header /><script src=""></script>
      <main className='relative flex bg-blue-100 border pt-14'>
        <Outlet />

      </main>
    </div>

  )
}

export default App;
