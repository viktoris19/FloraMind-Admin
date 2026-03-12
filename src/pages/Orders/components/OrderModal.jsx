import React from 'react';
import './OrderModal.css';
import '../Orders.css';

const OrderModal = ({ order, onClose, onEdit }) => {
    if (!order) return null;

    const handleOverlayClick = (e) => {
        handleClose(e);
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleEdit = () => {
        if (onEdit) {
            onEdit(order);
        }
    };
    

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={onClose}>×</button>
                
                <div className='modal-header'>
                    <h2>Заказ {order.id}</h2>
                </div>
                
                <div className='modal-body'>
                    <div className='modal-photo-section'>
                        <div className='photo-placeholder'>
                            <img 
                                src={require('../flowers.png')} 
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
                                    <p><span className='info-label'>ФИО:</span> {order.fullName}</p>
                                    <p><span className='info-label'>тел.:</span> {order.phone}</p>
                                    <p><span className='info-label'>e-mail:</span> {order.customerEmail}</p>
                                </div>
                            </div>

                            <div className='modal-section'>
                                <h3>Доставка и оплата</h3>
                                <div className='modal-info'>
                                    <p><span className='info-label'>Способ:</span> {order.deliveryType}</p>
                                    <p><span className='info-label'>Адрес:</span> {order.address}</p>
                                    <p><span className='info-label'>Дата:</span> {order.deliveryDate}</p>
                                    <p><span className='info-label'>Оплата:</span> {order.paymentMethod}</p>
                                </div>
                            </div>
                        </div>

                        <div className='modal-right-column'>
                            <div className='modal-section'>
                                <h3>Параметры букета</h3>
                                <div className='modal-info'>
                                    <p><span className='info-label'>Для кого:</span> {order.forWhom}</p>
                                    <p><span className='info-label'>Возраст:</span> {order.age}</p>
                                    <p><span className='info-label'>Цвета:</span> {order.colors}</p>
                                    <p><span className='info-label'>Повод:</span> {order.occasion}</p>
                                    <p><span className='info-label'>Записка:</span> «{order.note}»</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='modal-footer'>
                    <button className='update-button' onClick={handleEdit}>Редактировать</button>
                    <button className='chat-button'>В чат с флористом</button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;