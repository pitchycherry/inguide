import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import {push as Menu} from 'react-burger-menu'
import './index.css'

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
                    <Link to="/" onClick={() => this.closeMenu()}>Home</Link>
                    <Link to="/about-us" onClick={() => this.closeMenu()}>About</Link>
                </Menu>
                <main id="page-wrap">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about-us" component={About}/>
                    <div className="hei">
                        <h1>Новый пост</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                    <div className="parallax">
                        <h1>Это параллакс блок</h1>
                    </div>
                    <div className="empty">
                        <h1>Интересная штука</h1>
                    </div>
                </main>
            </div>
        )
    }
}

export default App
