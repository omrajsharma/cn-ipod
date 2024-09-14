import React, { useState } from 'react'
import Default from './display/Default';
import Cover from './display/Cover';
import Music from './display/Music';
import Game from './display/Game';
import Menu from './display/Menu';

const IPod = () => {
    const [menuVisibility, setMenuVisibility] = useState(true);
    const [display, setDisplay] = useState();

    const menuList = [
        {title: "Cover Flow", display: "COVER"},
        {title: "Music", display: "MUSIC",
            subMenu: [
                {title: "Album", display: "ALBUM"}, 
                {title: "Artists", display: "ARTIST"}, 
                {title: "All Songs", display: "ALL"}]},
        {title: "Games", display: "GAME"},
        {title: "setting", display: "SETTING"}
    ];
    
  return (
    <div className='ipod'>
      <div className="ipod-display">
        {
            menuVisibility && <Menu menuList={menuList} setDisplay={setDisplay} setMenuVisibility={setMenuVisibility} />
        }
        {
            !display ? <Default /> 
            : display == "COVER" ? <Cover />
            : display == "MUSIC" ? <Music />
            : display == "GAME" ? <Game />
            : "NOthing is here"
        }
      </div>

      <div className="ipod-control-container">
        <div className="ipod-control">
            <span onClick={() => setMenuVisibility(!menuVisibility)}>Menu</span>
            <div className="ipod-control-btn-row">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>
                </span>
                <span>
                    <button className="ipod-control-btn"></button>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>
                </span>
            </div>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
                </svg>
            </span>
        </div>
      </div>
    </div>
  )
}

export default IPod
