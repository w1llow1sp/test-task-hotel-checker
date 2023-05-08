import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from './DatePicker.module.css';
import axios from "axios";
import {MainDataTypes} from "../types";


export type MainProps = {
    setSearchResults:Dispatch<SetStateAction<never[]>>
}
export const DatePicker = (props:MainProps) => {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [days, setDays] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Объявляем асинхронную функцию handleSubmit, которая принимает объект события типа React.FormEvent<HTMLFormElement>
        event.preventDefault();
        // Отменяем стандартное поведение формы при отправке
        const checkInDate = new Date(checkIn);
        // Создаем новый объект Date, преобразовав значение переменной checkIn в дату
        const checkOutDate = new Date(checkInDate.getTime() + parseInt(days) * 24 * 60 * 60 * 1000);
        // Создаем новый объект Date, добавив к checkInDate количество дней, указанное в переменной days. Значение days преобразовываем из строки в число с помощью parseInt
        const checkOutFormatted = checkOutDate.toISOString().slice(0, 10);
        // Преобразуем объект Date checkOutDate в строку в формате ISO и обрезаем ее, оставив только дату в формате "гггг-мм-дд"
        setCheckOut(checkOutFormatted);
        // Устанавливаем значение переменной checkOut равным отформатированной дате checkOutFormatted

        const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
        // Формируем URL для запроса к API сервиса Hotellook, вставляя значения переменных location, checkIn, checkOut и жестко заданные параметры в строку запроса

        try {
            const response = await axios.get(url);
            console.log(response.data);
            // здесь вы можете обработать данные, полученные с сервера
        } catch (error) {
            console.error(error);
        }
    };

    console.log(location,checkIn,checkOut)

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.first}>
                    <label htmlFor={'text'} className={`${styles.label} `}>
                        Локация
                    </label>
                    <input
                        id={'text'}
                        className={`${styles.formInput}`}
                        type={'text'}
                        value={location}
                        onChange={(event) => setLocation(event.currentTarget.value)}
                    />
                </div>
                <div className={styles.second}>
                    <label htmlFor={'date'} className={styles.label}>
                        Дата заселения
                    </label>
                    <input
                        id={'date'}
                        className={styles.formInput}
                        type={'date'}
                        value={checkIn}
                        onChange={(event) => setCheckIn(event.currentTarget.value)}
                    />
                </div>
                <div className={styles.third}>
                    <label htmlFor={'number'} className={`${styles.label} ${styles.thirdLabel}`}>
                        Количество дней
                    </label>
                    <input
                        id={'number'}
                        className={`${styles.formInput} ${styles.thirdInput}`}
                        type={'number'}
                        value={days}
                        onChange={(event) => setDays(event.currentTarget.value)}
                    />
                </div>
                <button className={styles.button} type={'submit'}>
                    Найти
                </button>
            </form>
        </>
    );
};




/*// Получаем значение даты и количество дней
    const dateInput = new Date((document.getElementById("date") as HTMLInputElement).value);
    const daysInput = parseInt((document.getElementById("number") as HTMLInputElement).value);


// Добавляем количество дней к дате
    const date = new Date(dateInput.getTime() + daysInput * 24 * 60 * 60 * 1000);

// Форматируем дату в нужный формат и выводим
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    console.log(formattedDate); // Выводим дату в консоль

    console.log(date.toLocaleDateString());*/