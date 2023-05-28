import React from "react";
const dayjs = require('dayjs');

const messagesArray = [
    {
        id: "Yesterday",
        printDay: "Yesterday",
    },
    {
        id: 1,
        sender: 'Билјана Трајковска',
        message: 'Здраво :)',
    },
    {
        id: 2,
        sender: 'Билјана Трајковска',
        message: 'Заинтересирана сум за скриптата по веројатност',
    },
    {
        id: 3,
        sender: 'Билјана Трајковска',
        message: "Дали би можеле да ја пратите по карго?",
        time: "23:58"
    },
    {
        id: "Today",
        printDay: "Today",
    },
    {
        id: 4,
        sender: 'me',
        message: "Здраво Билјана, те молам контактирај ме на телефон",
        time: "00:06"
    },
    {
        id: 5,
        sender: 'Билјана Трајковска',
        message: "Ок, поздрав!"
    },

]
const Chat = () => {
    const [messages, setMessages] = React.useState(messagesArray);
    const [newMessage, setNewMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newMessage) return;
        setMessages(prev => [...prev, {
            sender: "me",
            message: newMessage,
            time: dayjs(new Date()).format('HH:mm')
        }])
        if (messages.length === 8) {
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: messages.length + 1,
                    sender: 'Билјана Трајковска',
                    message: 'Здраво, да тоа е валидната адреса.',
                    time: dayjs(new Date()).format('HH:mm')
                }])
            }, 2000);
        } else if (messages.length === 10) {
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: messages.length + 1,
                    sender: 'Билјана Трајковска',
                    message: 'Договорено ќе ве известам.',
                    time: dayjs(new Date()).format('HH:mm')
                }])
            }, 2000);

            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: messages.length + 1,
                    sender: 'Билјана Трајковска',
                    message: 'Поздрав!',
                    time: dayjs(new Date()).format('HH:mm')
                }])
            }, 3500);
        }
        setNewMessage('');
    };

    const handleMsgInput = (event) => {
        setNewMessage(event.target.value);
    };

    return (
        <section style={{ background: '#eee' }}>
            <div className="container h-100" style={{ minHeight: "92vh", position: "relative" }}>
                <div className="row justify-content-center">
                    <div className="card" id="chat2" style={{ minHeight: "82vh", position: "relative", overflow: "auto" }}>
                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                            <img className="rounded rounded-circle"
                                src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                alt="avatar 1" style={{ width: "45px", height: "50px" }} />
                            <h5 className="mb-0 text-left">Билјана Трајковска</h5>
                            <h6 className="mb-0" style={{ fontWeight: 'normal' }}>@biljana.trajkovska</h6>
                        </div>
                        <div className="card-body" data-mdb-perfect-scrollbar="true"
                            style={{ position: "relative", height: "400px" }}>
                            {
                                messages.map((message, index) => {
                                    if (message?.printDay) {
                                        return <div key={message.printDay} className="divider d-flex align-items-center mb-4">
                                            <p className="text-center mx-3 mb-0"
                                                style={{ color: "#a2aab7" }}>{message.printDay}</p>
                                        </div>
                                    }

                                    if (message.sender === "me") {
                                        return <div className="d-flex flex-row justify-content-end mb-4 pt-1" key={message.id}>
                                            <div>
                                                <p className="small p-2 me-3 mb-1 text-white rounded-3"
                                                    style={{ backgroundColor: "#84A59D" }}>{message.message}</p>
                                                {message.time && messages[index + 1]?.sender !== "me" && <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">{message.time}</p>}
                                            </div>
                                            {(index === 0 || messages[index - 1].sender !== "me") && <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                                alt="avatar 1" style={{ width: "45px", height: "100%" }} />}
                                        </div>
                                    } else {
                                        return <div className="d-flex flex-row justify-content-start" key={message.id}>
                                            {(index === 0 || messages[index - 1].sender === "me") && <img
                                                className="rounded rounded-circle"
                                                src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                                alt="avatar 1" style={{ width: "45px", height: "50px" }} />}
                                            <div>
                                                <p className="small p-2 ms-3 mb-1 rounded-3"
                                                    style={{ background: "#f5f6f7" }}>{message.message}</p>
                                                {message.time && messages[index + 1]?.sender !== "Билјана Трајковска" && <p className="small text-start ms-3 mb-3 rounded-3 text-muted">{message.time}</p>}
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>

                    </div>
                    <div
                        className="mt-3 card-footer text-muted d-flex justify-content-between align-items-center p-3 gap-4">
                        <img className="rounded rounded-circle"
                            src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                            alt="avatar 1" style={{ width: "45px", height: "50px" }} />
                        <form className="w-100" onSubmit={handleSubmit}>
                            <input type="text"
                                className="form-control mt-4"
                                id="formControlInput1"
                                placeholder="Type message"
                                value={newMessage}
                                onChange={handleMsgInput}
                            />
                        </form>
                        <div>
                            <button style={{ width: "80px", height: "35px" }} onClick={handleSubmit}
                                type="submit"
                                className="mx-3 btn btn-secondary btn-sm">Send
                            </button>
                        </div>
                        {/* <form >
                                <div className="d-flex flex-row ml-3">


                                </div>
                            </form> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Chat;