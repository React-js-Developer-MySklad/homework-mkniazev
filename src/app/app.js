import html from "./app.html";
import './app.css'


const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const appData = [
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
    },
    {
        id: crypto.randomUUID(),
        name: "ООО Шаурма - Филиал на Савеловской",
        inn: "00123495683",
        address: "Улица Октябрьская, 47, кв. 9, г. Екатеринбург, 620100",
        kpp: "650201006"
    },
    {
        id: crypto.randomUUID(),
        name: "ИП Каренин Ф. Е.",
        inn: "183593068493",
        address: "Проспект Ленина, 55, кв. 3, г. Новосибирск, 630099",
        kpp: "290901007"
    },
    {
        id: crypto.randomUUID(),
        name: "ИП ЕМЕЛЬЯНЕНКО СЕРГЕЙ РАХИМОВИЧ",
        inn: "193848593021",
        address: "Улица Гагарина, 6, кв. 22, г. Самара, 443100",
        kpp: "230401008"
    },
    {
        id: crypto.randomUUID(),
        name: "ЗАО Нет на Рынке",
        inn: "1020384053",
        address: "Проспект Маяковского, 19, кв. 18, г. Омск, 644050",
        kpp: "660201009"
    }
]

export function getAppData() {
    return appData;
}

export const AppDataChangeEvent = {
    subscribers: [],
    subscribe: function(fn) {
        this.subscribers.push(fn)
    },
    fire: function() {
        this.subscribers.forEach(fn => fn())
    }
}

export function addDataElement(name, inn, address, kpp) {
    const newElement = {
        id: crypto.randomUUID(),
        name: name,
        inn: inn,
        address: address,
        kpp, kpp
    };
    appData.push(newElement);

    AppDataChangeEvent.fire();
}

export function deleteDataElement(id) {
    let idx = appData.findIndex((el) => el.id === id)
    if (idx > -1) {
        appData.splice(idx, 1)
    }
}

