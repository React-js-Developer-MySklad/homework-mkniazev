import React from 'react';
import addDocumentIcon from '/public/addDocument.png'

export default function Button() {
    const styles = {
        button: {
            width: "102px",
            height: "34px"
        }
    }

    return (
        <div style={styles.button}>
            <button data-modal-target="add-data-modal" data-modal-toggle="add-data-modal" type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <img class="w-4 h-4 text-white me-2" src={addDocumentIcon} alt="Document Add Icon" />
                Добавить
            </button>
        </div>
    )
}