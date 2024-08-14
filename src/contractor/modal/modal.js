import html from "./modal.html";
import './modal.css';

import { addDataElement } from "../../app/app";

const rootElement = document.getElementById('modal');
rootElement.innerHTML = html;

const form = document.forms.addContractorForm
form.onsubmit = function (event) {
    event.preventDefault(true);

    addDataElement(
        form.elements.name.value,
        form.elements.inn.value,
        form.elements.address.value,
        form.elements.kpp.value
    );
}

