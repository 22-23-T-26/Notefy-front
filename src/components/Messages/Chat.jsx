import React from "react";

const Chat = () => {

    const [ message, setMessage ] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('event', event);
        console.log('message', event.target[0].value);
        setMessage(event.target[0].value);
    };

    return (
        <section style={ { background: '#eee' } }>
            <div className="container h-100 py-5">
                <div className="row justify-content-center">
                    <div className="card" id="chat2">
                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                            <img className="rounded rounded-circle"
                                 src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                 alt="avatar 1" style={ { width: "45px", height: "50px" } }/>
                            <h5 className="mb-0 text-left">Билјана Трајковска</h5>
                            <h6 className="mb-0" style={ { fontWeight: 'normal' } }>@biljana.trajkovska</h6>
                        </div>
                        <div className="card-body" data-mdb-perfect-scrollbar="true"
                             style={ { position: "relative", height: "400px" } }>

                            <div className="d-flex flex-row justify-content-start">
                                <img className="rounded rounded-circle"
                                     src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                     alt="avatar 1" style={ { width: "45px", height: "50px" } }/>
                                <div>
                                    <p className="small p-2 ms-3 mb-1 rounded-3"
                                       style={ { background: "#f5f6f7" } }>Здраво :)</p>
                                    <p className="small p-2 ms-3 mb-1 rounded-3"
                                       style={ { background: "#f5f6f7" } }>Заинтересирана сум за скриптата по
                                        веројатност
                                    </p>
                                    <p className="small p-2 ms-3 mb-1 rounded-3"
                                       style={ { background: "#f5f6f7" } }>Дали би
                                        можеле да ја пратите по карго?</p>
                                    <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                                </div>
                            </div>

                            <div className="divider d-flex align-items-center mb-4">
                                <p className="text-center mx-3 mb-0"
                                   style={ { color: "#a2aab7" } }>Today</p>
                            </div>

                            <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3"
                                       style={ { backgroundColor: "#84A59D" } }>Здраво Билјана,
                                        те молам контактирај ме на телефон.</p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                                </div>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                    alt="avatar 1" style={ { width: "45px", height: "100%" } }/>
                            </div>

                            <div className="d-flex flex-row justify-content-start">
                                <img className="rounded rounded-circle"
                                     src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                     alt="avatar 1" style={ { width: "45px", height: "50px" } }/>
                                <div>
                                    <p className="small p-2 ms-3 mb-1 rounded-3"
                                       style={ { background: "#f5f6f7" } }>Ок, поздрав!</p>

                                    { !!message && (
                                        <p className="small p-2 ms-3 mb-1 rounded-3"
                                           style={ { background: "#f5f6f7" } }>{ message }</p>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                        <div
                            className="mt-3 card-footer text-muted d-flex justify-content-start align-items-center p-3">
                            <img className="rounded rounded-circle"
                                 src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                 alt="avatar 1" style={ { width: "45px", height: "50px" } }/>

                            <form className="form-inline" onSubmit={ handleSubmit }>
                                <div className="d-flex flex-row ml-3">
                                    <input type="text"
                                           className="col-md-6 form-control justify-content-center"
                                           id="formControlInput1"
                                           placeholder="Type message"/>
                                    <button style={ { width: "80px", height: "35px" } }
                                            type="submit"
                                            className="mx-3 btn btn-secondary btn-sm">Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat;