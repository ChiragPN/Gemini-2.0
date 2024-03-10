import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import '../SideBar/Sidebar.css'
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [extented, setExtended] = useState(false)
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" onClick={() => setExtended(prev => !prev)}/>
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extented ? <p>New chat</p> : null}
        </div>

        {extented ? <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((question, index) => {
            return (
              <div className="recent-entry" key={index} onClick={() => loadPrompt(question)}>
                <img src={assets.message_icon} alt="" />
                <p>{question.slice(0, 18)}...</p>
              </div>
            )
          })}
        </div> : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img className='w-6' src={assets.question_icon} alt="" />
          {extented ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img className='w-6' src={assets.history_icon} alt="" />
          {extented ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img className='w-6' src={assets.setting_icon} alt="" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
        
    </div>
  )
}

export default Sidebar