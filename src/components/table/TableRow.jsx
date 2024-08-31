import React from 'react';

export default function TableRow(props) {
    const onRemoveClick = (e) => {
        props.onRowRemove(props.data.id);
    }

    const onRowDoubleClick = (e) => {
        props.onDoubleClick(props.data);
    }

    return (
        <tr className="border-b border-gray-200" onDoubleClick={onRowDoubleClick}>
            <td className="px-4 py-4 text-gray-900">
                {props.data.name}
            </td>
            <td className="px-4 py-4 text-gray-500">
                {props.data.inn}
            </td>
            <td className="px-4 py-4 text-gray-900">
                {props.data.address}
            </td>
            <td className="px-4 py-4 text-gray-500">
                {props.data.kpp}
            </td>
            <td className="px-4 py-4 text-right" onClick={onRemoveClick}>
                <a className="font-medium text-blue-600 hover:underline" href="#">
                    Удалить
                </a>
            </td>
        </tr>
    )
}