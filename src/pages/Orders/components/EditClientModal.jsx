import React, { useState } from 'react';
import './EditClientModal.css';
import '../Orders.css';

const EditClientModal = ({ client, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: client?.name || '',
        phone: client?.phone || '',
        email: client?.email || '',
        city: client?.city || 'Москва',
        address: client?.address || '',
        metro: client?.metro || ''
    });

    if (!client) return null;

    const handleClose = (e) => {
        e?.stopPropagation();
        if (onClose) {
            onClose();
        }
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
            onSave(client.id, formData);
        }
        onClose();
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-content edit-client-modal' onClick={handleContentClick}>
                <button className='modal-close' onClick={handleClose}>×</button>
                
                <div className='modal-header'>
                    <h2>Редактирование клиента {client.name}</h2>
                    <p className='client-id-header'>ID: {client.id}</p>
                </div>
                
                <div className='modal-body'>
                    <div className='edit-client-sections'>
                        {/* Контактные данные */}
                        <div className='edit-section'>
                            <h3>Контактные данные</h3>
                            <div className='edit-fields'>
                                <div className='edit-field'>
                                    <label>ФИО:</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
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

                        {/* Адрес доставки */}
                        <div className='edit-section'>
                            <h3>Адрес доставки</h3>
                            <div className='edit-fields'>
                                <div className='edit-field'>
                                    <label>Город:</label>
                                    <input
                                        type='text'
                                        name='city'
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder='Москва'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Адрес:</label>
                                    <input
                                        type='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder='ул. Тверская, д. 10, кв. 45'
                                    />
                                </div>
                                <div className='edit-field'>
                                    <label>Метро:</label>
                                    <input
                                        type='text'
                                        name='metro'
                                        value={formData.metro}
                                        onChange={handleChange}
                                        placeholder='Тверская'
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

export default EditClientModal;