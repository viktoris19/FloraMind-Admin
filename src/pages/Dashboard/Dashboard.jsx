import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {

    const navigate = useNavigate();

    const stats = [
        { title: 'Новых заказов', value: 5 },
        { title: 'В обработке', value: 3 },
        { title: 'Доставлено', value: 12},
    ];

    const handleQuickAction = (action) => {
    switch(action) {
        case 'Новый заказ':
            navigate('/orders?tab=orders&action=new');
            break;
        case 'Новый клиент':
            navigate('/orders?tab=clients&action=new'); 
            break;
        case 'Все заказы':
            navigate('/orders?tab=orders');
            break;
        case 'Параметры':
            navigate('/orders?tab=settings'); 
            break;
        case 'Поддержка':
            window.open('https://t.me/florabot', '_blank');
            break;
        default:
            navigate('/orders');
    }
};

    const quickActions = [
        { name: 'Новый заказ'},
        { name: 'Новый клиент'},
        { name: 'Все заказы'},
        { name: 'Параметры' },
        { name: 'Поддержка'}
    ];

    const orders = [
        {
            id: 'id2324434',
            date: '14.02.2026 14:54',
            customerName: 'Елена Е.',
            customerEmail: 'elena@mail.ru',
            deliveryType: 'Доставка',
            items: ['Для себя', 'Без повода', 'Молодой (20-35 лет)'],
            price: '5000 ₽',
            status: 'В сборке'
        },
        {
            id: 'id2324434',
            date: '14.02.2026 10:21',
            customerName: 'Валерий B.',
            customerEmail: 'valeriy@mail.ru',
            deliveryType: 'Самовывоз',
            items: ['Для девушки', 'Для фонаря', 'Молодой (20-35 лет)'],
            price: '17000 ₽',
            status: 'Готов'
        },
        {
            id: 'id2324433',
            date: '14.02.2026 10:10',
            customerName: 'Максим M.',
            customerEmail: 'maximus@mail.ru',
            deliveryType: 'Самовывоз',
            items: ['Для девушки', 'Извинения', 'Молодой (20-35 лет)'],
            price: '25000 ₽',
            status: 'Готов'
        }
    ];

    const today = new Date();
    const formattedDate = today.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long'
    });

    return(
        <div className='dashboard'>
            <header className='dashboard-header'>
                <div className='header-left'> 
                    <img src={require('./Logotip.png')} alt="Логотип FM" className='dashboard-logotip'/>
                    <p className='header-title'>FloraMind • Админ</p>
                </div>
                <button className='logout-button'>Выход</button>
            </header>
            <div className='section-welcome'>
                <h1 className='dashboard-title'>Добро пожаловать!</h1>
            </div>
            <div className='dashboard-card'>
                <p className='dashboard-date'>Сегодня, {formattedDate}</p>
                <div className='stats-grid'>
                    {stats.map((stat, index) => (
                    <div key={index} className='stats-card' style={{ backgroundColor: stat.bgColor }}>
                        <h3 className='stats-card__title'>{stat.title}</h3>
                        <p className='stats-card__value'>{stat.value}</p>
                    </div>
                    ))}
                </div>
                <section className='quick-actions'>
                    <h2 className='section-title'>Быстрые действия</h2>
                    <div className="actions-grid">
                    {quickActions.map((action, index) => (
                        <button 
                            key={index} 
                            className="action-button"
                            onClick={() => handleQuickAction(action.name)}
                        >
                            {action.name}
                        </button>
                    ))}
                    </div>
                </section>
                <h2 className='section-title'>Последние заказы</h2>
                <section className='recent-container'>
                    <div className='table-container'>
                        <table className='orders-table'>
                            <thead>
                                <tr className='table-header'>
                                <th>ID заказа</th>
                                <th>Дата</th>
                                <th>Клиент</th>
                                <th>Способ получения</th>
                                <th>Описание</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order,index)=>(
                                    <tr key={index} className='order-row'>
                                        <td className='order-cell order-cell--id'>{order.id}</td>
                                        <td className='order-cell order-cell--date'>{order.date}</td>
                                        <td className='order-cell'>
                                            <div>{order.customerName}</div>
                                            <div className='order-cell-email'>{order.customerEmail}</div>
                                        </td>
                                        <td className='order-cell'>{order.deliveryType}</td>
                                        <td className='order-cell order-cell--items'>
                                            <p className='item-title'>Букет</p>
                                            {order.items.map((item, i) => (
                                            <div key={i} className='order-item'>• {item}</div>
                                            ))}
                                        </td>
                                        <td className='order-cell order-cell--price'>{order.price}</td>
                                        <td className='order-cell'>
                                            <span className={`order-status order-status--${order.status === 'В сборке' ? 'v-sborke' : 'gotov'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='view-all-orders'>
                        <button className='view-all-button' onClick={() => navigate('/Orders')}>Все заказы</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;