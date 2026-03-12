import React from 'react';
import './SettingsSection.css'

const SettingsSection = ({ title, items, onEdit, isTwoColumns = false }) => {
    if (isTwoColumns) {
        const midPoint = Math.ceil(items.length / 2);
        const firstColumn = items.slice(0, midPoint);
        const secondColumn = items.slice(midPoint);

        return (
            <div className='setting-section two-columns'>
                <h3 className='setting-section-title'>{title}</h3>
                <div className='columns-container'>
                    <ul className='setting-list'>
                        {firstColumn.map((item, index) => (
                            <li key={index} className='setting-item'>{item}</li>
                        ))}
                    </ul>
                    <ul className='setting-list'>
                        {secondColumn.map((item, index) => (
                            <li key={index} className='setting-item'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='section-footer'>
                    <button className='edit-section-btn' onClick={() => onEdit(title, items)}>
                        Редактировать
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='setting-section'>
            <h3 className='setting-section-title'>{title}</h3>
            <ul className='setting-list'>
                {items.map((item, index) => (
                    <li key={index} className='setting-item'>{item}</li>
                ))}
            </ul>
            <div className='section-footer'>
                <button className='edit-section-btn' onClick={() => onEdit(title, items)}>
                    Редактировать
                </button>
            </div>
        </div>
    );
};

export default SettingsSection;