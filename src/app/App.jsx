import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import Modal from "../components/modal/Modal";
import { useData } from "../hooks/useData/data.hook";

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

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(createEmptyModalData())
    const { data, fetchInitialData, setData } = useData();

    useEffect(() => {
        fetchInitialData()
    }, [])

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

    const onSubmitModal = (data) => {
        if (data.inn === ""
            || data.name === ""
            || data.address === ""
            || data.kpp === "") {
            return;
        } else {
            if (data.id === "") {
                onRowAdd(data.name, data.inn, data.address, data.kpp);
            } else {
                onRowUpdate(data.id, data.name, data.inn, data.address, data.kpp)
            }
        }

        onCloseModal();
    }

    return (
        <>
            <Header onOpenModal={onOpenModal} />
            <main>
                <Table data={data} onRowRemove={onRowRemove} onOpenModal={onOpenModal} />
                <Modal data={modalData} isModalOpen={isModalOpen} onCloseModal={onCloseModal} onSubmitModal={onSubmitModal} />
            </main>
            <Footer />
        </>
    )
}
