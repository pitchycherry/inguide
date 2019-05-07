import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import About from '../about'
import {push as Menu} from 'react-burger-menu'
import './index.css'
import Header from "../header";
import News from "../news";
import {connect} from "react-redux";

class App extends Component {
    state = {
        menuOpen: false
    };

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu() {
        this.setState({menuOpen: false})
    }

    render() {
        const lang = this.props.language;
        return (
            <div id="outer-container">
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}
                      pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                    <Link to="/about" onClick={() => this.closeMenu()}>{lang ? 'О нас' : 'About us'}</Link>
                    <p>{lang ? 'InGuide рекомендует' : 'InGuide recommends'}</p>
                    <Link to="/" onClick={() => this.closeMenu()}>{lang ? 'Авиабилеты' : 'Air tickets'}</Link>
                    <Link to="/" onClick={() => this.closeMenu()}>{lang ? 'Отели' : 'Hotels'}</Link>
                    <Link to="/" onClick={() => this.closeMenu()}>{lang ? 'Апартаменты' : 'Apartments'}</Link>
                    <Link to="/" onClick={() => this.closeMenu()}>{lang ? 'Где купить' : 'Where can you buy'}</Link>

                    <Link to="/" onClick={() => this.closeMenu()}>{lang ? 'Задать вопрос' : 'Ask a question'}</Link>
                    <div className="container">
                        <div className="social_network row d-flex justify-content-around">
                            <Link to="/" onClick={() => this.closeMenu()}><i className="fa fa-vk"
                                                                             aria-hidden="true"> </i></Link>
                            <Link to="/" onClick={() => this.closeMenu()}><i className="fa fa-instagram"
                                                                             aria-hidden="true"> </i></Link>
                            <Link to="/" onClick={() => this.closeMenu()}><i className="fa fa-facebook-square"
                                                                             aria-hidden="true"> </i></Link>
                        </div>
                    </div>
                </Menu>
                <main id="page-wrap">
                    <div className="main__block">
                        <Header/>

                        <Route exact path="/" component={About}/>
                        <Route exact path="/about" component={About}/>
                    </div>

                    <News/>
                </main>
            </div>
        )
    }
}

const mapStateToProps = ({header_reducer}) => ({
    language: header_reducer.language
});

export default connect(
    mapStateToProps
)(App)
