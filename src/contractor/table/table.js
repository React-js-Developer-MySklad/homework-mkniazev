import html from "./table.html";
import './table.css'

import { getAppData } from "../../app/app"; // TODO use to retrieve app data

const rootElement = document.getElementById('table');
rootElement.innerHTML = html;

const tableHeadElement = document.getElementById("table-head");
tableHeadElement.classList.add("text-xs", "text-gray-600", "uppercase");
tableHeadElement.appendChild(createTableHead());

//TODO add same for body

function createTableHead() {
    const tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-200", "bg-gray-50");

    tr.appendChild(createTableHeadData("Наименование"));
    tr.appendChild(createTableHeadData("ИНН"));
    tr.appendChild(createTableHeadData("Адрес"));
    tr.appendChild(createTableHeadData("КПП"));
    tr.appendChild(createTableHeadData("")); // trachcan

    return tr;
}

function createTableHeadData(value) {
    const td  = document.createElement("td");
    td.scope = "col";
    td.classList.add("px-4", "py-4", "p-1");
    td.innerHTML = value;

    return td;
}

