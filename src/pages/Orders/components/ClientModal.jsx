import React from 'react';

const ClientModal = ({ client, onClose }) => {
    if (!client) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={onClose}>×</button>
                
                <div className='modal-header'>
                    <h2>Клиент {client.name}</h2>
                    <p className='client-id-header'>ID: {client.id}</p>
                </div>
                
                <div className='modal-body'>
                    <div className='modal-info-columns'>
                        <div className='modal-left-column'>
                            <div className='modal-section'>
                                <h3>Контактные данные</h3>
                                <div className='modal-info'>
                                    <p><span className='info-label'>ФИО:</span> {client.name}</p>
                                    <p><span className='info-label'>тел.:</span> {client.phone}</p>
                                    <p><span className='info-label'>e-mail:</span> {client.email}</p>
                                </div>
                            </div>

                            <div className='modal-section'>
                                <h3>Адрес доставки</h3>
                                <div className='modal-info'>
                                    <p><span className='info-label'>Город:</span> {client.city}</p>
                                    <p><span className='info-label'>Адрес:</span> {client.address}</p>
                                    <p><span className='info-label'>Метро:</span> {client.metro}</p>
                                </div>
                            </div>
                        </div>

                        <div className='modal-right-column'>
                            <div className='modal-section'>
                                <h3>Последние заказы</h3>
                                <div className='modal-info orders-list'>
                                    {client.orders.map((orderId, index) => (
                                        <div key={index} className='order-history-item'>
                                            <span className='order-history-id'>{orderId}</span>
                                            <span className='order-history-date'>{client.ordersDate[index]}</span>
                                            <span className='order-history-price'>{client.ordersPrice[index]}</span>
                                        </div>
                                    ))}
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
    );
};

export default ClientModal;