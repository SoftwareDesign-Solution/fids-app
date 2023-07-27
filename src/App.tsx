import { Link, Outlet, useLocation } from 'react-router-dom'
import { useDateTime } from './hooks/useDateTime'

function App() {

  const date = useDateTime();
  const location = useLocation();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-4xl">FIDS App</h1>
        <h2 className='text-4xl'>{date.toLocaleTimeString()}</h2>
      </div>
      <nav>
        <div className="w-1/2 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className={'text-3xl ' + (location.pathname == "/arrivals" ? "active" :"")} to="arrivals">Arrivals</Link>
          <Link className={'text-3xl ' + (location.pathname == "/departures" ? "active" :"")} to="departures">Departures</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default App
