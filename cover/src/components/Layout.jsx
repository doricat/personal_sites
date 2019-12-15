import React, { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <nav className="nav nav-masthead justify-content-center">
                            </nav>
                        </div>
                    </header>

                    {this.props.children}

                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>i@doricat.me</p>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}