import { useState } from 'react';

import './sidebar.css';
import { assets } from '../../assets/assets';

export default function Sidebar() {
    const [extended, setExtended] = useState(false);

    function handleSideBar() {
        setExtended(extended => !extended);
    }

    return (
        <div className={`sidebar ${extended ? 'expanded' : 'collapsed'}`}>
            <div className="top">
                <img className='menu' src={assets.menu_icon} onClick={handleSideBar} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended &&
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is React ...</p>
                        </div>
                    </div>
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>History</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
}