import html from "./table.html";
import './table.css'

import { getAppData, AppDataChangeEvent } from "../../app/app";

const rootElement = document.getElementById('table');
rootElement.innerHTML = html;


const tableHeadElement = document.getElementById("table-head");
tableHeadElement.classList.add("text-xs", "text-gray-600", "uppercase");
tableHeadElement.appendChild(createTableHead());

const tableBodyElement = document.getElementById("table-body");
tableBodyElement.classList.add("text-sm");
drawTable();

AppDataChangeEvent.subscribe(() => {
    clearTable();
    drawTable();
})

function clearTable() {
    tableBodyElement.innerHTML = "";
}

function drawTable() {    
    getAppData().forEach(data => {
        tableBodyElement.appendChild(createTableRow(data));
    });
}


function createTableHead() {
    const tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-200", "bg-gray-50");

    tr.appendChild(createTableHeadData("Наименование"));
    tr.appendChild(createTableHeadData("ИНН"));
    tr.appendChild(createTableHeadData("Адрес"));
    tr.appendChild(createTableHeadData("КПП"));
    tr.appendChild(createTableHeadData("")); // trash can

    return tr;
}

function createTableHeadData(columnName) {
    const td = document.createElement("td");
    td.scope = "col";
    td.classList.add("px-4", "py-4", "p-1");
    td.innerHTML = columnName;

    return td;
}

function createTableRow(data) {
    const tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-200");

    const name = document.createElement("td");
    name.classList.add("px-4", "py-4", "text-gray-900");
    name.innerHTML = data.name;

    const inn = document.createElement("td");
    inn.classList.add("px-4", "py-4", "text-gray-500");
    inn.innerHTML = data.inn;

    const address = document.createElement("td");
    address.classList.add("px-4", "py-4", "text-gray-900");
    address.innerHTML = data.address;

    const kpp = document.createElement("td");
    kpp.classList.add("px-4", "py-4", "text-gray-500");
    kpp.innerHTML = data.kpp;

    const deletion = document.createElement("td");
    deletion.classList.add("px-4", "py-4", "text-right");
    const deleteButton = document.createElement("a");
    deleteButton.classList.add("font-medium", "text-blue-600", "hover:underline");
    deleteButton.href = "#";
    deleteButton.innerHTML = "Удалить";

    deletion.appendChild(deleteButton)


    tr.appendChild(name);
    tr.appendChild(inn);
    tr.appendChild(address);
    tr.appendChild(kpp);
    tr.appendChild(deletion);
    return tr;
}
