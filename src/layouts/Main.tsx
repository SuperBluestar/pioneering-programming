import { Outlet } from 'react-router-dom'
import LeftSideMenu from '../components/layouts/LeftSideMenu'
import TopBar from '../components/layouts/TopBar'
import './Main.css'

const Main = () => {
  return (
    <div>
      <TopBar />
      <div className='main-container'>
        <LeftSideMenu className='left-side-bar' />
        <div className='page-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Main
