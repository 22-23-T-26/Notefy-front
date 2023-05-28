import React from 'react';
import MyMessages from "./MyMessages";
import ChatProfile from "./ChatProfile";
import Chat from "./Chat";

const Messages = () => {

    return (
        <div className="page-wrapper">
            <div className="row justify-content-center" style={ { background: '#84A59D' } }>
                <div className=" col-md-3 chat">
                    <MyMessages/>
                </div>
                <div className="col-md-6 chat">
                    <Chat/>
                </div>
                <div className=" col-md-3 chat">
                    <ChatProfile/>
                </div>
            </div>
        </div>
    )
}
export default Messages;