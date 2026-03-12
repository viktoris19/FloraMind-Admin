import React, { useState } from 'react';
import './EditGroupModal.css';
import '../Orders.css';

const EditGroupModal = ({ group, onClose, onSave }) => {
    const [items, setItems] = useState(group?.items || []);

    if (!group) return null;

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

    const handleItemChange = (index, newValue) => {
        const updatedItems = [...items];
        updatedItems[index] = newValue;
        setItems(updatedItems);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleAddItem = () => {
        setItems([...items, '']);
    };

    const handleSave = () => {
        if (onSave) {
            onSave(group.name, items.filter(item => item.trim() !== ''));
        }
        onClose();
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-content edit-modal' onClick={handleContentClick}>
                <button className='modal-close' onClick={handleClose}>×</button>
                
                <div className='modal-header'>
                    <h2>Редактирование группы</h2>
                </div>
                
                <div className='modal-body'>
                    <div className='edit-group-section'>
                        <h3>Название группы: <span className='group-name'>{group.name}</span></h3>
                        
                        <div className='edit-values'>
                            <h4>Значения:</h4>
                            <div className='values-list'>
                                {items.map((item, index) => (
                                    <div key={index} className='value-item'>
                                        <input
                                            type='text'
                                            className='value-input'
                                            value={item}
                                            onChange={(e) => handleItemChange(index, e.target.value)}
                                            placeholder='Введите значение'
                                            autoFocus={index === items.length - 1}
                                        />
                                        <button 
                                            className='remove-value-btn'
                                            onClick={() => handleRemoveItem(index)}
                                            title='Удалить'
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                            
                            <button className='add-value-btn' onClick={handleAddItem}>
                                + Добавить значение
                            </button>
                        </div>
                    </div>
                </div>

                <div className='modal-footer edit-footer'>
                    <button className='cancel-btn' onClick={handleClose}>Отмена</button>
                    <button className='save-btn' onClick={handleSave}>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default EditGroupModal;