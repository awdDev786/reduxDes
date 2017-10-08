/**
 * @flow
 */
import React, { Component } from 'react';
// import { observable } from 'mobx';
import { observer } from 'mobx-react';
import type { TableType } from '../utils/flowtypes';

@observer class Tables extends Component {
    props: Props
    render() {
        const { tables } = this.props;
        if (tables.length === 0) {
            return null;
        }
        return (
            <div className='table-wrapper'>
                <ul>
                    { tables.map((table) => (
                        <li key={ table.id }>{table.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

type Props = {
    tables: Array<TableType>
};

export default Tables;
