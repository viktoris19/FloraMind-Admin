import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const orders = [
        {
            id: 'id2324435',
            date: '14.02.2026 14:54',
            customerName: 'Елена Е.',
            customerEmail: 'elena@mail.ru',
            deliveryType: 'Доставка',
            items: ['Букет', 'Для себя', 'Без повода', 'Молодой (20-35 лет)'],
            price: '5000 ₽',
            status: 'В сборке'
        },
        {
            id: 'id2324434',
            date: '14.02.2026 10:21',
            customerName: 'Валерий B.',
            customerEmail: 'valeriy@mail.ru',
            deliveryType: 'Самовывоз',
            items: ['Букет', 'Для девушки', '14 февраля', 'Молодой (20-35 лет)'],
            price: '17000 ₽',
            status: 'Готов'
        },
        {
            id: 'id2324433',
            date: '14.02.2026 10:10',
            customerName: 'Максим M.',
            customerEmail: 'maximus@mail.ru',
            deliveryType: 'Самовывоз',
            items: ['Букет', 'Для девушки', 'Извинения', 'Молодой (20-35 лет)'],
            price: '25000 ₽',
            status: 'Готов'
        },
        {
            id: 'id2324432',
            date: '14.02.2026 9:54',
            customerName: 'Даниил D.',
            customerEmail: 'danill@mail.ru',
            deliveryType: 'Доставка',
            items: ['Букет', 'Для девушки', '14 февраля', 'Молодой (20-35 лет)'],
            price: '15000 ₽',
            status: 'Готов'
        },
        {
            id: 'id2324431',
            date: '14.02.2026 8:32',
            customerName: 'Никита H.',
            customerEmail: 'nickitich@mail.ru',
            deliveryType: 'Доставка',
            items: ['Букет', 'Для девушки', '14 февраля', 'Молодой (20-35 лет)'],
            price: '25000 ₽',
            status: 'Готов'
        }
    ];

    const clients = [
        {
            id: 101,
            name: 'Анна Петрова',
            phone: '+7 999 123-45-67',
            email: 'anna.petrova@mail.ru',
            address: 'Москва, ул. Тверская, д. 10, кв. 45',
            orders: ['id2402332', 'id2402984', 'id2402002']
        },
        {
            id: 102,
            name: 'Владимир В.',
            phone: '+7 999 124-46-68',
            email: 'vladimir@mail.ru',
            address: 'Москва, ул. Знаменская, д. 10, кв. 45',
            orders: ['id2402333', 'id2402985', 'id2402006']
        },
        {
            id: 131,
            name: 'Олег М.',
            phone: '+7 999 125-47-69',
            email: 'oleg@mail.ru',
            address: 'Москва, ул. Победы, д. 10, кв. 45',
            orders: ['id2402336', 'id2402985', 'id2402004']
        },
        {
            id: 154,
            name: 'Егор К.',
            phone: '+7 999 126-48-60',
            email: 'egor@mail.ru',
            address: 'Москва, ул. Трубная, д. 10, кв. 45',
            orders: ['id2402342', 'id2402994', 'id2402012']
        }
    ];

    return (
        <div className='orders'>
            <header className='dashboard-header'>
                <div className='header-left'> 
                    <img src={require('./Logotip.png')} alt="Логотип FM" className='dashboard-logotip'/>
                    <p className='header-title'>FloraMind • Админ</p>
                </div>
                <button onClick={handleLogout} className='logout-button'>Выход</button>
            </header>
            
            <div className='orders-card'>
                <div className='orders-tab'>
                    {/* Radio кнопки */}
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-1' defaultChecked/>
                    <label htmlFor="tab-button-1">Заказы</label>
                    
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-2'/>
                    <label htmlFor="tab-button-2">Клиенты</label>
                    
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-3'/>
                    <label htmlFor="tab-button-3">Параметры</label>
                    
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-4'/>
                    <label htmlFor="tab-button-4" onClick={() => navigate('/dashboard')}>Главная</label>

                    {/* Контент вкладки "Заказы" */}
                    <div className='tab-content' id='content-1'>
                        <div className='orders-table-container'>
                            <table className='orders-table'>
                                <thead>
                                    <tr className='table-header'>
                                        <th>ID заказа</th>
                                        <th>Дата и время</th>
                                        <th>Заказчик</th>
                                        <th>Способ доставки</th>
                                        <th>Товар</th>
                                        <th>Цена</th>
                                        <th>Статус</th>
                                        <th>Фото</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={index} className='order-row'>
                                            <td className='order-cell order-cell--id'>{order.id}</td>
                                            <td className='order-cell order-cell--date'>{order.date}</td>
                                            <td className='order-cell'>
                                                <div className='order-customer'>
                                                    <span className='order-customer-name'>{order.customerName}</span>
                                                    <span className='order-customer-email'>{order.customerEmail}</span>
                                                </div>
                                            </td>
                                            <td className='order-cell'>{order.deliveryType}</td>
                                            <td className='order-cell'>
                                                <div className='order-items'>
                                                    {order.items.map((item, i) => (
                                                        <div key={i} className={`order-item ${i === 0 ? 'order-item--main' : 'order-item--bullet'}`}>
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className='order-cell'>
                                                <span className='order-price'>{order.price}</span>
                                            </td>
                                            <td className='order-cell'>
                                                <span className={`order-status order-status--${order.status === 'В сборке' ? 'v-sborke' : 'gotov'}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className='order-cell'>
                                                <button className='order-photo-btn'>Фото</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Контент вкладки "Клиенты" */}
                    <div className='tab-content' id='content-2'>
                        <div className='clients-table-container'>
                            <table className='clients-table'>
                                <thead>
                                    <tr className='table-header'>
                                        <th>Клиент</th>
                                        <th>Контакты</th>
                                        <th>Заказы</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client) => (
                                        <tr key={client.id} className='client-row'>
                                            <td className='client-cell'>
                                                <div className='client-info'>
                                                    <span className='client-name'>{client.name}</span>
                                                    <span className='client-id'>ID: {client.id}</span>
                                                </div>
                                            </td>
                                            <td className='client-cell'>
                                                <div className='client-contacts'>
                                                    <span className='client-phone'>{client.phone}</span>
                                                    <span className='client-email'>{client.email}</span>
                                                    <span className='client-address'>{client.address}</span>
                                                </div>
                                            </td>
                                            <td className='client-cell'>
                                                <div className='client-orders-list'>
                                                    {client.orders.map((orderId, i) => (
                                                        <span key={i} className='client-order-id'>
                                                            {orderId}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Контент вкладки "Параметры" */}
                    <div className='tab-content' id='content-3'>
                        <div className='settings-grid'>
                            {/* Цвета */}
                            <div className='setting-section'>
                                <h3 className='setting-section-title'>Цвета</h3>
                                    <ul className='setting-list'>
                                        <li className='setting-item'>Нежные и пастельные</li>
                                        <li className='setting-item'>Яркие и сочные</li>
                                        <li className='setting-item'>Бело-зеленые</li>
                                        <li className='setting-item'>Красные-бордовые</li>
                                        <li className='setting-item'>Розовые</li>
                                    </ul>
                            </div>

                            {/* Повод */}
                            <div className='setting-section'>
                                <h3 className='setting-section-title'>Повод</h3>
                                    <ul className='setting-list'>
                                        <li className='setting-item'>8 марта</li>
                                        <li className='setting-item'>Свадьба</li>
                                        <li className='setting-item'>День рождения</li>
                                        <li className='setting-item'>Годовщина отношений</li>
                                        <li className='setting-item'>Извинения</li>
                                        <li className='setting-item'>Просто так/без повода</li>
                                    </ul>
                            </div>

                            {/* Возраст */}
                            <div className='setting-section'>
                                <h3 className='setting-section-title'>Возраст</h3>
                                    <ul className='setting-list'>
                                        <li className='setting-item'>Ребенок (до 12 лет)</li>
                                        <li className='setting-item'>Подросток (13-19 лет)</li>
                                        <li className='setting-item'>Молодой (20-35 лет)</li>
                                        <li className='setting-item'>Взрослый (36-55 лет)</li>
                                        <li className='setting-item'>Пожилой (60+ лет)</li>
                                        <li className='setting-item'>Неважно</li>
                                    </ul>
                            </div>

                            {/* Для кого */}
                            <div className='setting-section'>
                                <h3 className='setting-section-title'>Для кого</h3>
                                    <ul className='setting-list'>
                                        <li className='setting-item'>Для девушки/парня</li>
                                        <li className='setting-item'>Для жены/мужа</li>
                                        <li className='setting-item'>Для мамы/папы</li>
                                        <li className='setting-item'>Коллеге</li>
                                        <li className='setting-item'>Подруге/другу</li>
                                        <li className='setting-item'>Себе в офис/домой</li>
                                    </ul>
                            </div>

                            {/* Записка */}
                            <div className='setting-section'>
                                <h3 className='setting-section-title'>Записка</h3>
                                    <ul className='setting-list'>
                                        <li className='setting-item'>Да, с текстом "С Днем Рождения"</li>
                                        <li className='setting-item'>Да, с романтичным текстом</li>
                                        <li className='setting-item'>Да, со своим текстом</li>
                                        <li className='setting-item'>Да, со стандартным текстом</li>
                                    </ul>
                            </div>
                        </div>
                        
                        {/* Кнопка Добавить */}
                        <div className='settings-footer'>
                            <button className='add-button'>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;