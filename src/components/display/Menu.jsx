import React from 'react'

const Menu = ({menuList, setDisplay, setMenuVisibility}) => {
  return (
    <div className='menu'>
        <h3>Om's Ipod</h3>
        <div className="menu-list">
            {menuList.map((item, idx) => 
                <p 
                key={idx} 
                className='menu-list-item' 
                onClick={() => {
                    setDisplay(item.display)
                    setMenuVisibility(false)
                }}>
                    {item.title}
                </p>)}            
        </div>
    </div>
  )
}

export default Menu
