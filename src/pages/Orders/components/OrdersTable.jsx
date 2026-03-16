import React, { useState, useEffect } from 'react';
import './OrdersTable.css';

const OrdersTable = ({ orders, onOrderClick }) => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [deliveryFilter, setDeliveryFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' или 'desc' для сортировки по дате
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedOrders, setDisplayedOrders] = useState([]);

    useEffect(() => {
        let filtered = orders.filter(order => {
            if (statusFilter !== 'all') {
                const statusMap = {
                    'v-sborke': 'В сборке',
                    'gotov': 'Готов'
                };
                if (order.status !== statusMap[statusFilter]) return false;
            }

            if (deliveryFilter !== 'all' && order.deliveryType !== deliveryFilter) {
                return false;
            }

            if (searchTerm) {
                const searchLower = searchTerm.toLowerCase();
                return order.id.toLowerCase().includes(searchLower) ||
                       order.customerName.toLowerCase().includes(searchLower) ||
                       order.customerEmail.toLowerCase().includes(searchLower);
            }

            return true;
        });


        const sorted = filtered.sort((a, b) => {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
            
            if (sortOrder === 'asc') {
                return dateA - dateB; 
            } else {
                return dateB - dateA; 
            }
        });

        setDisplayedOrders(sorted);
    }, [orders, statusFilter, deliveryFilter, sortOrder, searchTerm]);

    const parseDate = (dateString) => {
        const [day, month, year, time] = dateString.split(/[.\s:]/);
        return new Date(`${year}-${month}-${day}T${time}:${time}:00`).getTime();
    };

    const toggleSort = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className='orders-table-container'>
            <div className='filters-panel'>
                <div className='filter-group'>
                    <select 
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className='filter-select'
                    >
                        <option value='all'>Все статусы</option>
                        <option value='v-sborke'>В сборке</option>
                        <option value='gotov'>Готов</option>
                    </select>
                </div>

                <div className='filter-group'>
                    <select 
                        value={deliveryFilter}
                        onChange={(e) => setDeliveryFilter(e.target.value)}
                        className='filter-select'
                    >
                        <option value='all'>Все типы</option>
                        <option value='Доставка'>Доставка</option>
                        <option value='Самовывоз'>Самовывоз</option>
                    </select>
                </div>

                <div className='sort-controls'>
                    <button 
                        className={`sort-button ${sortOrder === 'asc' ? 'active' : ''}`}
                        onClick={toggleSort}
                    >
                        По дате {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                </div>

                <div className='search-group'>
                    <input
                        type='text'
                        placeholder='🔍 Поиск по ID или клиенту...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='search-input'
                    />
                </div>
            </div>

            <div className='stats-left'>
                Показано заказов: {displayedOrders.length} из {orders.length}
            </div>

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
                    </tr>
                </thead>
                <tbody>
                    {displayedOrders.map((order, index) => (
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
                        </tr>
                    ))}
                </tbody>
            </table>

            {displayedOrders.length === 0 && (
                <div className='no-results'>
                    Заказы не найдены
                </div>
            )}
        </div>
    );
};

export default OrdersTable;