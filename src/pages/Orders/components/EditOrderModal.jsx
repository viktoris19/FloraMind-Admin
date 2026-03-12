import React, { useState } from 'react';
import './EditOrderModal.css';
import '../Orders.css';

const EditOrderModal = ({ order, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        fullName: order?.fullName || order?.customerName || '',
        phone: order?.phone || '',
        email: order?.customerEmail || '',
        deliveryType: order?.deliveryType || '',
        address: order?.address || '',
        deliveryDate: order?.deliveryDate || order?.date || '',
        paymentMethod: order?.paymentMethod || order?.price || '',
        forWhom: order?.forWhom || '',
        age: order?.age || '',
        colors: order?.colors || '',
        occasion: order?.occasion || '',
        note: order?.note || ''
    });

    if (!order) return null;

    const handleClose = (e) => {
        e?.stopPropagation();
        onClose();
    };

    const handleOverlayClick = (e) => {
        handleClose(e);
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (onSave) {
            onSave(order.id, formData);
        }
        onClose();
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-content edit-order-modal' onClick={handleContentClick}>
                <button className='modal-close' onClick={handleClose}>×</button>
                
                <div className='modal-header'>
                    <h2>Редактирование заказа {order.id}</h2>
                </div>
                
                <div className='modal-body'>
                    <div className='edit-order-sections'>
                        {/* Контактные данные */}
                        <div className='edit-section'>
                            <h3>Контактные данные</h3>
                            <div className='edit-fields'>
                                <div className='edit-field'>
                                    <label>ФИО:</label>
                                    <input
                                        type='text'
                                        name='fullName'
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder='Введите ФИО'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Телефон:</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='+7 999 123-45-67'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Email:</label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='email@mail.ru'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Доставка и оплата */}
                        <div className='edit-section'>
                            <h3>Доставка и оплата</h3>
                            <div className='edit-fields'>
                                <div className='edit-field'>
                                    <label>Способ:</label>
                                    <select
                                        name='deliveryType'
                                        value={formData.deliveryType}
                                        onChange={handleChange}
                                    >
                                        <option value='Доставка'>Доставка</option>
                                        <option value='Самовывоз'>Самовывоз</option>
                                    </select>
                                </div>
                                <div className='edit-field'>
                                    <label>Адрес:</label>
                                    <input
                                        type='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder='г. Москва, ул. Тверская, д. 10'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Дата:</label>
                                    <input
                                        type='text'
                                        name='deliveryDate'
                                        value={formData.deliveryDate}
                                        onChange={handleChange}
                                        placeholder='14 февраля 2026, 14:00–16:00'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Оплата:</label>
                                    <input
                                        type='text'
                                        name='paymentMethod'
                                        value={formData.paymentMethod}
                                        onChange={handleChange}
                                        placeholder='5000 ₽ (картой онлайн)'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Параметры букета */}
                        <div className='edit-section'>
                            <h3>Параметры букета</h3>
                            <div className='edit-fields'>
                                <div className='edit-field'>
                                    <label>Для кого:</label>
                                    <input
                                        type='text'
                                        name='forWhom'
                                        value={formData.forWhom}
                                        onChange={handleChange}
                                        placeholder='Для девушки'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Возраст:</label>
                                    <input
                                        type='text'
                                        name='age'
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder='25 лет'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Цвета:</label>
                                    <input
                                        type='text'
                                        name='colors'
                                        value={formData.colors}
                                        onChange={handleChange}
                                        placeholder='Нежные пастельные'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Повод:</label>
                                    <input
                                        type='text'
                                        name='occasion'
                                        value={formData.occasion}
                                        onChange={handleChange}
                                        placeholder='14 февраля'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Записка:</label>
                                    <input
                                        type='text'
                                        name='note'
                                        value={formData.note}
                                        onChange={handleChange}
                                        placeholder='Текст записки'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='modal-footer edit-footer'>
                    <button className='cancel-btn' onClick={handleClose}>Отмена</button>
                    <button className='save-btn' onClick={handleSave}>Сохранить изменения</button>
                </div>
            </div>
        </div>
    );
};

export default EditOrderModal;