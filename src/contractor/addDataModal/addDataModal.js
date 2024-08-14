import html from "./addDataModal.html";
import './addDataModal.css';

import { addDataElement } from "../../app/app";

const rootElement = document.getElementById('add-data-modal-dock');
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
