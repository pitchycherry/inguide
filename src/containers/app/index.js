import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import About from '../about'
import {push as Menu} from 'react-burger-menu'
import './index.css'
import Header from "../header";
import News from "../news";

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
        return (
            <div id="outer-container">
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}
                      pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                    <Link to="/about" onClick={() => this.closeMenu()}>О нас</Link>
                    <p>InGuide рекоммендует</p>
                    <Link to="/" onClick={() => this.closeMenu()}>Авиабилеты</Link>
                    <Link to="/" onClick={() => this.closeMenu()}>Отели</Link>
                    <Link to="/" onClick={() => this.closeMenu()}>Аппартаменты</Link>

                    <Link to="/" onClick={() => this.closeMenu()}>Задать вопрос</Link>
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

export default App
