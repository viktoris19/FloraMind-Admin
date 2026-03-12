import React from 'react';

const EditGroupModal = ({ group, onClose }) => {
    if (!group) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content edit-modal' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={onClose}>×</button>
                
                <div className='modal-header'>
                    <h2>Редактирование группы</h2>
                </div>
                
                <div className='modal-body'>
                    <div className='edit-group-section'>
                        <h3>Название группы: <span className='group-name'>{group.name}</span></h3>
                        
                        <div className='edit-values'>
                            <h4>Значения:</h4>
                            <div className='values-list'>
                                {group.items.map((item, index) => (
                                    <div key={index} className='value-item'>
                                        <span className='value-bullet'>•</span>
                                        <input 
                                            type='text' 
                                            className='value-input' 
                                            defaultValue={item}
                                            placeholder='Введите значение'
                                        />
                                        <button className='remove-value-btn'>×</button>
                                    </div>
                                ))}
                            </div>
                            
                            <button className='add-value-btn'>
                                + Добавить значение
                            </button>
                        </div>
                    </div>
                </div>

                <div className='modal-footer edit-footer'>
                    <button className='cancel-btn' onClick={onClose}>Отмена</button>
                    <button className='save-btn'>Сохранить изменения</button>
                </div>
            </div>
        </div>
    );
};

export default EditGroupModal;