/**
 * @flow
 */
import React, { PureComponent } from 'react';
import Header from '../containers/Header';
import Tables from '../containers/Tables';

class Schema extends PureComponent {
    myCallback = () => {
        console.log('parent called');
        let table = JSON.parse(window.localStorage.getItem('test'));
        if (!table) {
            table = { tables: [] };
        }
        const length = table.tables.length + 1;
        table.tables.push({ name: 'Table' + length, id: length });
        window.localStorage.setItem('test', JSON.stringify(table));
    }
    render() {
        return (
            <div className='container-fluid'>
                <Header callbackFromParent={ this.myCallback } />
                <br />
                <br />
                <Tables val={ this.tables } selectedOption={ this.selectedOption } />
            </div>
        );
    }
}

export default Schema;
