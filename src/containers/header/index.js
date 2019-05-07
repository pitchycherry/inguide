import React, {Component, Fragment} from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {change_language} from './ducks'

class Header extends Component {

    render() {
        const lang = this.props.language;
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"> </div>
                        <div className="col mt-1">
                            <p className="farray">InGuide</p>
                            <p className="cartoon">InGuide</p>
                        </div>
                        <div className="col text-right mt-3">
                            <div className="dropdown">
                                <button className="btn btn-outline-dark dropdown-toggle dropdown__language"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {lang ? 'Выбрать язык' : 'Choose language'}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item"
                                       onClick={() => this.props.change_language(1)}>{lang ? 'Русский' : 'Russian'}</a>
                                    <a className="dropdown-item"
                                       onClick={() => this.props.change_language(0)}>{lang ? 'Английский' : 'English'}</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({header_reducer}) => ({
    language: header_reducer.language
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            change_language
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

