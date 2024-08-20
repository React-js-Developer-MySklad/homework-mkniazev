import React from 'react'

export default function Modal(props) {

    const onNameChange = (e) => {
        props.setModalData({...props.data, name: e.target.value})
    }

    const onInnChange = (e) => {
        props.setModalData({...props.data, inn: e.target.value})
    }

    const onAddressChange = (e) => {
        props.setModalData({...props.data, address: e.target.value})
    }

    const onKppChange = (e) => {
        props.setModalData({...props.data, kpp: e.target.value})
    }

    
    return (
        <div id="add-data-modal" tabIndex="-1" aria-hidden="true" className={`${props.isModalOpen ? "backdrop-blur" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="p-4 w-full max-w-md max-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Контрагент
                        </h3>
                        <button type="button" onClick={props.onCloseModal} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" name="addContractorForm">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Наименование</label>
                                <input type="text" name="name" id="name" onChange={onNameChange} value={props.data.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                            </div>
                            <div>
                                <label htmlFor="inn" className="block mb-2 text-sm font-medium text-gray-900">ИНН</label>
                                <input type="text" name="inn" id="inn" onChange={onInnChange} value={props.data.inn} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Адрес</label>
                                <input type="text" name="address" id="address" onChange={onAddressChange} value={props.data.address} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="kpp" className="block mb-2 text-sm font-medium text-gray-900">КПП</label>
                                <input type="text" name="kpp" id="kpp" onChange={onKppChange} value={props.data.kpp} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="w-full flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <button type="button" onClick={props.onSubmitModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Сохранить</button>
                                <button type="button" onClick={props.onCloseModal} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Отменить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}