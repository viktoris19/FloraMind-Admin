import React from 'react';
import './ClientsTable.css'

const ClientsTable = ({ clients, onClientClick }) => {
    return (
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
        </div>
    );
};

export default ClientsTable;