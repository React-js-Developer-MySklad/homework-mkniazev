import React from 'react';
import addDocumentIcon from '/public/addDocument.png'

export default function Button() {
    const styles = {
        buttonContainer: {
            width: "102px",
            height: "34px"
        },
        button: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
        }
    }

    return (
        <div style={styles.buttonContainer}>
            <button style={styles.button} data-modal-target="add-data-modal" data-modal-toggle="add-data-modal" type="button" className="px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <img className="text-white me-2" src={addDocumentIcon} alt="Document Add Icon" />
                Добавить
            </button>
        </div>
    )
}