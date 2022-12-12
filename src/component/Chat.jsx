import React from 'react'
import { ChatEngine } from 'react-chat-engine';

const Chat = () => {
  return (
    <div>
        <ChatEngine
			projectID=''
			userName='adam'
			userSecret='pass1234'
		/>

    </div>
  )
}

export default Chat