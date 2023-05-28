import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MyMessages = () => {

    return (
        <div className="d-flex flex-row align-items-center gap-3 p-3 ">
            <section>
                <h4 className="text-center" style={ { color: 'white' } }>Мои пораки</h4>
                <div className="row">
                    <div className="h-search">
                        <input type=" search" className="form-control rounded rounded-4" placeholder="Пребарај..."
                               aria-label=" Search" aria-describedby=" search-addon"
                               style={ { background: "#ced7d7", height: '50px' } }/>
                        <button className="search-button">
                            <FontAwesomeIcon icon={ faSearch } style={ { color: "white" } }/>
                        </button>
                    </div>

                    <div className="card" style={ { background: '#84A59D', border: 'none' } }>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0">
                                <li className="p-2 border-bottom rounded" style={ { background: '#BBC9C6FF' } }>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img
                                                src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                                                alt="avatar"
                                                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                width="60" height="50"/>
                                            <div>
                                                <p className="mb-0">Билјана Трајковска</p>
                                                <p className="small text-muted">Ок, поздрав!</p>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p className="small text-muted mb-1">Just now</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                 alt="avatar"
                                                 className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                 width="60"/>
                                            <div>
                                                <p className="mb-0">Кристијан Михајловски</p>
                                                <p className="small text-muted">Ок... Благодарам за скриптата</p>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p className="small text-muted mb-1">5 mins ago</p>
                                            <span className="text-muted float-end"><i className="fas fa-check"
                                                                                      aria-hidden="true"/></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyMessages;