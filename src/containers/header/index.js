import React, {Fragment} from 'react'

const Header = () => (
    <Fragment>
        <div className="container-fluid">
            <div className="row">
                <div className="col"> </div>
                <div className="col mt-1">
                    <p className="title">InGuide</p>
                </div>
                <div className="col text-right mt-3">
                    <div className="dropdown">
                        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Выбрать язык
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Русский</a>
                            <a className="dropdown-item" href="#">Английский</a>
                            <a className="dropdown-item" href="#">Китайский</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
);

export default Header
