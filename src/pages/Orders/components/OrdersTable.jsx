import React from 'react';

import './OrdersTable.css'

const OrdersTable = ({ orders, onOrderClick }) => {
    return (
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
                            onClick={() => onOrderClick(order)}
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
    );
};

export default OrdersTable;