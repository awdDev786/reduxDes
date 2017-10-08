/**
 * @flow
 */
import React, { Component } from 'react';

class Header extends Component {
    save = () => {
        this.props.callbackFromParent();
    }
    render() {
        return (
            <header>
                <div className='container  col-md-2'>
                    <br />
                    <button className='btn btn-info' onClick={ this.save }>Add Table</button>
                </div>
            </header>
        );
    }
}

export default Header;
