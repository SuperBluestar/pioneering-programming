import { Component, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openLeftSideMenu, closeLeftSideMenu } from '../../store/config'
import './LeftSideMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight, faHome, faInbox } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { NavLink } from 'react-router-dom'

const menuList: Array<{ title: string, link: string, icon: IconDefinition }> = [
  {
    title: 'Page 1',
    link: 'page-1',
    icon: faHome
  },
  {
    title: 'Page 2',
    link: 'page-2',
    icon: faInbox
  }
]

const LeftSideMenu: FC<{ className?: string }> = ({ className = '' }) => {
  const config = useAppSelector((state) => state.config)
  const dispatch = useAppDispatch()
  return (
    <div className={`left-side-menu ${config.leftSideMenuOpened ? 'expand' : 'collapse'} ${className}`}>
      <div
        className='toggle-btn'
      >
        <FontAwesomeIcon
          icon={config.leftSideMenuOpened ? faAnglesLeft : faAnglesRight}
          onClick={() => config.leftSideMenuOpened ? dispatch(closeLeftSideMenu()) : dispatch(openLeftSideMenu())}
        />
      </div>
      <div className='left-side-menu-list w-full'>
        {
          menuList.map((menuItem, id) => (
            <NavLink className='menu-item' to={menuItem.link} key={id}>
              <div className='icon-container'>
                <FontAwesomeIcon icon={menuItem.icon} fontSize="1.5rem" />
              </div>
              <span className={config.leftSideMenuOpened ? 'title-expand' : 'title-collapse'}>{menuItem.title}</span>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default LeftSideMenu
