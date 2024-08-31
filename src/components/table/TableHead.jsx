import React from 'react';

export default function TableHead(props) {
    return (
        <thead className="text-xs text-gray-600 uppercase">
            <tr className="border-b border-gray-200 bg-gray-50">
                {props.columnNames.map(name => <td key={name} scope="col" className="px-4 py-4 p-1">{name}</td>)}
            </tr>
        </thead>
    )
}