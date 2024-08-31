import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import Modal from "../components/modal/Modal";

export default function App() {

    const createEmptyModalData = () => {
        return {
            id: "",
            name: "",
            inn: "",
            address: "",
            kpp: ""
        }
    }

    const createTestTableData = () => {
        return [
            {
                id: crypto.randomUUID(),
                name: "ООО Сайгак",
                inn: "4562349580",
                address: "Улица Ленина, 25, кв. 17, г. Москва, 123456",
                kpp: "772501001"
            },
            {
                id: crypto.randomUUID(),
                name: "ОАО Дивный Новый Мир",
                inn: "2845830381",
                address: "Проспект Мира, 10, кв. 5, г. Санкт-Петербург, 191028",
                kpp: "502801002"
            },
            {
                id: crypto.randomUUID(),
                name: "ИП Петров А.К.",
                inn: "102475839596",
                address: "Улица Красная, 12, кв. 34, г. Казань, 420015",
                kpp: "781301004"
            },
            {
                id: crypto.randomUUID(),
                name: "АО Банк",
                inn: "3841924936",
                address: "Проспект Победы, 8, кв. 21, г. Нижний Новгород, 603000",
                kpp: "540601005"
            }
        ]
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(createEmptyModalData())

    const [data, setData] = useState(createTestTableData());

    const onRowRemove = (id) => {
        const newData = data.filter(row => row.id != id);

        setData(newData)
    }

    const onRowAdd = (name, inn, address, kpp) => {
        const id = crypto.randomUUID()

        const newData = [...data, {
            id,
            name,
            inn,
            address,
            kpp
        }];

        setData(newData);
    }

    const onRowUpdate = (id, name, inn, address, kpp) => {
        const newData = data.map(row => {
            if (id === row.id) {
                return {
                    id,
                    name,
                    inn,
                    address,
                    kpp
                }
            } else {
                return row;
            }
        })

        setData(newData);
    }

    const onCloseModal = () => {
        setModalData(createEmptyModalData())
        setModalOpen(false)
    }

    const onOpenModal = (data) => {
        if (data === null || data === undefined) {
            setModalData(createEmptyModalData())
        } else {
            setModalData(data)
        }

        setModalOpen(true)
    }

    const onSubmitModal = () => {
        if (modalData.inn === ""
            || modalData.name === ""
            || modalData.address === ""
            || modalData.kpp === "") {
            return;
        } else {
            if (modalData.id === "") {
                onRowAdd(modalData.name, modalData.inn, modalData.address, modalData.kpp);
            } else {
                onRowUpdate(modalData.id, modalData.name, modalData.inn, modalData.address, modalData.kpp)
            }
        }
        
        onCloseModal();
    }


    return (
        <>
            <Header onOpenModal={onOpenModal} />
            <main>
                <Table data={data} onRowRemove={onRowRemove} onOpenModal={onOpenModal} />
                <Modal data={modalData} setModalData={setModalData} isModalOpen={isModalOpen} onCloseModal={onCloseModal} onSubmitModal={onSubmitModal} />
            </main>
            <Footer />
        </>
    )
}
