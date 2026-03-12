import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const handleOrderClick = (order) => {
        console.log('Клик по заказу:', order); // Для отладки
        setSelectedOrder(order);
        setSelectedClient(null);
    };

    const handleClientClick = (client) => {
        console.log('Клик по клиенту:', client); // Для отладки
        setSelectedClient(client);
        setSelectedOrder(null);
    };

    const closeModal = () => {
        console.log('Закрытие модалки');
        setSelectedOrder(null);
        setSelectedClient(null);
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
            status: 'В сборке',
            fullName: 'Елена Егорова',
            phone: '+7 999 123-45-67',
            address: 'г. Москва, ул. Тверская, д. 10, кв. 45',
            deliveryDate: '14 февраля 2026, 14:00–16:00',
            paymentMethod: '5000 ₽ (картой онлайн)',
            forWhom: 'Для себя',
            age: '25 лет',
            colors: 'Нежные пастельные',
            occasion: 'Без повода',
            note: 'Спасибо!',
            photo: './flowers.png'
        },
        {
            id: 'id2324434',
            date: '14.02.2026 10:21',
            customerName: 'Валерий B.',
            customerEmail: 'valeriy@mail.ru',
            deliveryType: 'Самовывоз',
            items: ['Букет', 'Для девушки', '14 февраля', 'Молодой (20-35 лет)'],
            price: '17000 ₽',
            status: 'Готов',
            fullName: 'Валерий В.',
            phone: '+7 999 123-45-67',
            address: 'г. Москва, ул. Тверская, д. 10',
            deliveryDate: '14 февраля 2026, 10:00–12:00',
            paymentMethod: '17 000 ₽ (картой онлайн)',
            forWhom: 'Для девушки',
            age: '25 лет',
            colors: 'Нежные пастельные',
            occasion: '14 февраля',
            note: 'Люблю'
        },
        {
            id: 'id2324433',
            date: '14.02.2026 10:10',
            customerName: 'Максим M.',
            customerEmail: 'maximus@mail.ru',
            deliveryType: 'Самовывоз',
            items: ['Букет', 'Для девушки', 'Извинения', 'Молодой (20-35 лет)'],
            price: '25000 ₽',
            status: 'Готов',
            fullName: 'Максим М.',
            phone: '+7 999 123-45-67',
            address: 'г. Москва, ул. Тверская, д. 10',
            deliveryDate: '14 февраля 2026, 10:00–12:00',
            paymentMethod: '25 000 ₽ (картой онлайн)',
            forWhom: 'Для девушки',
            age: '25 лет',
            colors: 'Нежные пастельные',
            occasion: 'Извинения',
            note: 'Прости'
        },
        {
            id: 'id2324432',
            date: '14.02.2026 9:54',
            customerName: 'Даниил D.',
            customerEmail: 'danill@mail.ru',
            deliveryType: 'Доставка',
            items: ['Букет', 'Для девушки', '14 февраля', 'Молодой (20-35 лет)'],
            price: '15000 ₽',
            status: 'Готов',
            fullName: 'Даниил Д.',
            phone: '+7 999 123-45-67',
            address: 'г. Москва, ул. Тверская, д. 10',
            deliveryDate: '14 февраля 2026, 9:00–11:00',
            paymentMethod: '15 000 ₽ (картой онлайн)',
            forWhom: 'Для девушки',
            age: '25 лет',
            colors: 'Нежные пастельные',
            occasion: '14 февраля',
            note: 'С 14 февраля!'
        },
        {
            id: 'id2324431',
            date: '14.02.2026 8:32',
            customerName: 'Никита H.',
            customerEmail: 'nickitich@mail.ru',
            deliveryType: 'Доставка',
            items: ['Букет', 'Для девушки', '14 февраля', 'Молодой (20-35 лет)'],
            price: '25000 ₽',
            status: 'Готов',
            fullName: 'Никита Н.',
            phone: '+7 999 123-45-67',
            address: 'г. Москва, ул. Тверская, д. 10',
            deliveryDate: '14 февраля 2026, 8:00–10:00',
            paymentMethod: '25 000 ₽ (картой онлайн)',
            forWhom: 'Для девушки',
            age: '25 лет',
            colors: 'Нежные пастельные',
            occasion: '14 февраля',
            note: 'С праздником!'
        }
    ];

    const clients = [
        {
            id: 101,
            name: 'Анна Петрова',
            phone: '+7 999 123-45-67',
            email: 'anna.petrova@mail.ru',
            address: 'ул. Тверская, д. 10, кв. 45',
            city: 'Москва',
            metro: 'Тверская',
            orders: ['id2402332', 'id2402984', 'id2402002'],
            ordersDate: ['14.02.2026', '11.12.2025', '02.11.2025'],
            ordersPrice: ['9000 ₽', '4000 ₽', '6000 ₽']
        },
        {
            id: 102,
            name: 'Владимир В.',
            phone: '+7 999 124-46-68',
            email: 'vladimir@mail.ru',
            address: 'ул. Знаменская, д. 10, кв. 45',
            city: 'Москва',
            metro: 'Знаменская',
            orders: ['id2402333', 'id2402985', 'id2402006'],
            ordersDate: ['14.02.2026', '11.12.2025', '02.11.2025'],
            ordersPrice: ['9000 ₽', '4000 ₽', '6000 ₽']
        },
        {
            id: 131,
            name: 'Олег М.',
            phone: '+7 999 125-47-69',
            email: 'oleg@mail.ru',
            address: 'ул. Победы, д. 10, кв. 45',
            city: 'Москва',
            metro: 'Победы',
            orders: ['id2402336', 'id2402985', 'id2402004'],
            ordersDate: ['14.02.2026', '11.12.2025', '02.11.2025'],
            ordersPrice: ['9000 ₽', '4000 ₽', '6000 ₽']
        },
        {
            id: 154,
            name: 'Егор К.',
            phone: '+7 999 126-48-60',
            email: 'egor@mail.ru',
            address: 'ул. Трубная, д. 10, кв. 45',
            city: 'Москва',
            metro: 'Трубная',
            orders: ['id2402342', 'id2402994', 'id2402012'],
            ordersDate: ['14.02.2026', '11.12.2025', '02.11.2025'],
            ordersPrice: ['9000 ₽', '4000 ₽', '6000 ₽']
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
                                        <tr 
                                            key={index} 
                                            className='order-row'
                                            onClick={() => handleOrderClick(order)}
                                            style={{ cursor: 'pointer' }}
                                        >
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
                                        <tr 
                                            key={client.id} 
                                            className='client-row'
                                            onClick={() => handleClientClick(client)}
                                            style={{ cursor: 'pointer' }}
                                        >
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
                        <div className='settings-footer'>
                            <button className='add-button'>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для заказа */}
            {selectedOrder && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <button className='modal-close' onClick={closeModal}>×</button>
                        
                        <div className='modal-header'>
                            <h2>Заказ {selectedOrder.id}</h2>
                        </div>
                        
                        <div className='modal-body'>
                            <div className='modal-photo-section'>
                                <div className='photo-placeholder'>
                                    <img 
                                        src={require('./flowers.png')} 
                                        alt="Фото букета"
                                        className='order-photo'
                                    />
                                    <button className='change-photo-btn'>Изменить фото</button>
                                </div>
                            </div>

                            <div className='modal-info-columns'>
                                <div className='modal-left-column'>
                                    <div className='modal-section'>
                                        <h3>Контактные данные</h3>
                                        <div className='modal-info'>
                                            <p><span className='info-label'>ФИО:</span> {selectedOrder.fullName}</p>
                                            <p><span className='info-label'>тел.:</span> {selectedOrder.phone}</p>
                                            <p><span className='info-label'>e-mail:</span> {selectedOrder.customerEmail}</p>
                                        </div>
                                    </div>

                                    <div className='modal-section'>
                                        <h3>Доставка и оплата</h3>
                                        <div className='modal-info'>
                                            <p><span className='info-label'>Способ:</span> {selectedOrder.deliveryType}</p>
                                            <p><span className='info-label'>Адрес:</span> {selectedOrder.address}</p>
                                            <p><span className='info-label'>Дата:</span> {selectedOrder.deliveryDate}</p>
                                            <p><span className='info-label'>Оплата:</span> {selectedOrder.paymentMethod}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='modal-right-column'>
                                    <div className='modal-section'>
                                        <h3>Параметры букета</h3>
                                        <div className='modal-info'>
                                            <p><span className='info-label'>Для кого:</span> {selectedOrder.forWhom}</p>
                                            <p><span className='info-label'>Возраст:</span> {selectedOrder.age}</p>
                                            <p><span className='info-label'>Цвета:</span> {selectedOrder.colors}</p>
                                            <p><span className='info-label'>Повод:</span> {selectedOrder.occasion}</p>
                                            <p><span className='info-label'>Записка:</span> «{selectedOrder.note}»</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='modal-footer'>
                            <button className='update-button'>Редактировать</button>
                            <button className='chat-button'>В чат с флористом</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Модальное окно для клиента */}
            {selectedClient && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <button className='modal-close' onClick={closeModal}>×</button>
                        
                        <div className='modal-header'>
                            <h2>Клиент {selectedClient.name}</h2>
                            <p className='client-id-header'>ID: {selectedClient.id}</p>
                        </div>
                        
                        <div className='modal-body'>
                            <div className='modal-info-columns'>
                                <div className='modal-left-column'>
                                    <div className='modal-section'>
                                        <h3>Контактные данные</h3>
                                        <div className='modal-info'>
                                            <p><span className='info-label'>ФИО:</span> {selectedClient.name}</p>
                                            <p><span className='info-label'>тел.:</span> {selectedClient.phone}</p>
                                            <p><span className='info-label'>e-mail:</span> {selectedClient.email}</p>
                                        </div>
                                    </div>

                                    <div className='modal-section'>
                                        <h3>Адрес доставки</h3>
                                        <div className='modal-info'>
                                            <p><span className='info-label'>Город:</span> {selectedClient.city}</p>
                                            <p><span className='info-label'>Адрес:</span> {selectedClient.address}</p>
                                            <p><span className='info-label'>Метро:</span> {selectedClient.metro}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='modal-right-column'>
                                    <div className='modal-section'>
                                        <h3>Последние заказы</h3>
                                        <div className='modal-info orders-list'>
                                            {selectedClient.orders.map((orderId, index) => (
                                                <div key={index} className='order-history-item'>
                                                    <span className='order-history-id'>{orderId}</span>
                                                    <span className='order-history-date'>{selectedClient.ordersDate[index]}</span>
                                                    <span className='order-history-price'>{selectedClient.ordersPrice[index]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='modal-footer'>
                            <button className='update-button'>Редактировать</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;