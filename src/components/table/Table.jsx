import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function Table(props) {
    return (
        <div className="relative overflow-x-auto rounded-lg">
            <table className="table-fixed w-full text-left text-gray-400">
                <TableHead columnNames={[
                    "Наименование",
                    "ИНН",
                    "Адрес",
                    "КПП",
                    ""
                ]} />
                <tbody>
                    {props.data.map(data => {
                        return (
                            <TableRow key={data.id} data={data}/>
                        )
                    })}
                    <TableRow data={props.data[0]} />
                </tbody>
            </table>
        </div>
    )
}