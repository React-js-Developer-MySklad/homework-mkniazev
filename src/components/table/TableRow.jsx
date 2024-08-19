import React from 'react';

export default function TableRow(props) {
    return (
        <tr className="border-b border-gray-200">
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
            <td className="px-4 py-4 text-right">
                <a className="font-medium text-blue-600 hover:underline" href="#">
                    Удалить
                </a>
            </td>
        </tr>
    )
}