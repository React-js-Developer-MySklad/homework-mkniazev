import html from "./updateDataModal.html";
import './updateDataModal.css';

import { updateDataElement } from "../../app/app";
import { Modal } from "flowbite";

const rootElement = document.getElementById('update-data-modal-dock');
rootElement.innerHTML = html;

const form = document.forms.updateContractorForm

const modal = new Modal(document.getElementById("update-data-modal"));

export function showModal(data) {
    modal.show();

    form.elements.name.value = data.name;
    form.elements.inn.value = data.inn;
    form.elements.address.value = data.address;
    form.elements.kpp.value = data.kpp;

    form.onsubmit = function (event) {
        event.preventDefault()

        updateDataElement(
            data.id,
            form.elements.name.value,
            form.elements.inn.value,
            form.elements.address.value,
            form.elements.kpp.value
        )
    }
}
