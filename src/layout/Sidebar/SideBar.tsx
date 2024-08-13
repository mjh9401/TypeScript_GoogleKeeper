import React from 'react'
import { useLocation } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Container, ItemsBox, MainBox, StyledLogo } from './SideBar.styles';
import { toggleMenu } from '../../store/menu/menuSlice';
import { NavLink } from 'react-router-dom';
import { FaArchive, FaLightbulb,FaTag, FaTrash } from 'react-icons/fa';
import getStandardName from '../../utils/getStandard';
import { toggleTagsModal } from '../../store/modal/modalSlice';
import {MdEdit} from 'react-icons/md';
import {v4} from 'uuid'

const items =[
  {icon : <FaArchive/>, title : "Archive", id :v4()},
  {icon : <FaTrash/>, title : "Trash", id :v4()},
]

/**
 * 사이드바 컴포넌트
 * @returns 
 */
const SideBar = () => {
  const dispatch = useAppDispatch();

  const {isOpen} = useAppSelector((state)=> state.menu);
  const {tagsList} = useAppSelector((state)=>state.tags);
  const {pathname} = useLocation();

  if(pathname === '/404'){
    return null;
  }

  return (
    <Container $openMenu={isOpen ? "open" : ""}>
      <MainBox $openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>
        <ItemsBox>
          {/* note item */}
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={"/"}
              state={`notes`}
              className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
            >
              <span>
                <FaLightbulb />
              </span>
              <span>Notes</span>
            </NavLink>
          </li>
          {/* tag Items */}          
          {tagsList?.map(({tag,id})=>(
            <li key={id} onClick={()=>dispatch(toggleMenu(false))}>
              <NavLink
                to={`/tag/${tag}`}
                state={`${tag}`}
                className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
              >
                <span>
                  <FaTag/>
                </span>
                <span>{getStandardName(tag)}</span>
              </NavLink>
            </li>
          ))}
          {/* edit tag item */}
          <li className='sidebar__edit-item'
            onClick={()=>dispatch(toggleTagsModal({type:"edit",view:true}))}
          >
            <span>
              <MdEdit/>
            </span>
            <span>Edit Notes</span>
          </li>
          {/* other items */}
          {items.map(({icon,title,id})=>(
            <li key={id} onClick={()=>dispatch(toggleMenu(false))}>
              <NavLink
                to={`${title.toLocaleLowerCase()}`}
                state={`${title}`}
                className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
          
        </ItemsBox>
      </MainBox>
    </Container>
  )
}

export default SideBar