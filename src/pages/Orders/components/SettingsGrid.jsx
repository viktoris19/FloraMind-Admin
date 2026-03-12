import React from 'react';
import SettingsSection from './SettingsSection';
import './SettingsGrid.css'

const SettingsGrid = ({ groups, onEditGroup }) => {
    return (
        <div className='settings-grid'>
            <SettingsSection 
                title={groups.colors.title}
                items={groups.colors.items}
                onEdit={onEditGroup}
                isTwoColumns={true}
            />
            <SettingsSection 
                title={groups.occasion.title}
                items={groups.occasion.items}
                onEdit={onEditGroup}
            />
            <SettingsSection 
                title={groups.age.title}
                items={groups.age.items}
                onEdit={onEditGroup}
            />
            <SettingsSection 
                title={groups.forWhom.title}
                items={groups.forWhom.items}
                onEdit={onEditGroup}
            />
            <SettingsSection 
                title={groups.note.title}
                items={groups.note.items}
                onEdit={onEditGroup}
            />
        </div>
    );
};

export default SettingsGrid;