import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ClientsTable.css'

const ClientsTable = ({ clients, onClientClick }) => {

    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedClients, setDisplayedClients] = useState([]);

    useEffect(() => {
        let filtered = [...clients].filter(client => 
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.includes(searchTerm)
        );

        const sorted = filtered.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            
            if (sortOrder === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });

        setDisplayedClients(sorted);
        }, [clients, sortOrder, searchTerm]);

         const toggleSort = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    return (
    <div className='clients-table-container'>
        <div className='table-controls'>
            <div className='sort-controls'>
                <button 
                    className={`sort-button ${sortOrder === 'asc' ? 'active' : ''}`}
                    onClick={toggleSort}>
                    Сортировка по имени {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
            </div>
            <div className='search-control'>
                <input
                    type='text'
                    placeholder='🔍 Поиск по имени, email или телефону...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-input'/>
            </div>
        </div>

        <div className='table-stats'>
            Найдено клиентов: {displayedClients.length}
        </div>

            <table className='clients-table'>
                <thead>
                    <tr className='table-header'>
                        <th>Клиент</th>
                        <th>Контакты</th>
                        <th>Заказы</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedClients.map((client) => (
                        <tr 
                            key={client.id} 
                            className='client-row'
                            onClick={() => onClientClick(client)}
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
            {displayedClients.length === 0 && (
                <div className='no-results'>
                    Клиенты не найдены
                </div>
            )}
        </div>
    );
};

export default ClientsTable;