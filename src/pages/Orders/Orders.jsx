import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersData } from './data/ordersData';
import { clientsData } from './data/clientsData';
import { settingsGroups } from './data/settingsData';
import OrdersTable from './components/OrdersTable';
import ClientsTable from './components/ClientsTable';
import SettingsGrid from './components/SettingsGrid';
import OrderModal from './components/OrderModal';
import ClientModal from './components/ClientModal';
import EditGroupModal from './components/EditGroupModal';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [editingGroup, setEditingGroup] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
        setSelectedClient(null);
        setEditingGroup(null);
    };

    const handleClientClick = (client) => {
        setSelectedClient(client);
        setSelectedOrder(null);
        setEditingGroup(null);
    };

    const handleEditGroup = (groupName, items) => {
        setEditingGroup({ name: groupName, items: items });
        setSelectedOrder(null);
        setSelectedClient(null);
    };

    const closeModal = () => {
        setSelectedOrder(null);
        setSelectedClient(null);
        setEditingGroup(null);
    };

    return (
        <div className='orders'>
            <header className='dashboard-header'>
                <div className='header-left'> 
                    <img src={require('./Logotip.png')} alt="Логотип FM" className='dashboard-logotip'/>
                    <p className='header-title'>FloraMind • Админ</p>
                </div>
                <button onClick={handleLogout} className='logout-button'>Выход</button>
            </header>
            
            <div className='orders-card'>
                <div className='orders-tab'>
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-1' defaultChecked/>
                    <label htmlFor="tab-button-1">Заказы</label>
                    
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-2'/>
                    <label htmlFor="tab-button-2">Клиенты</label>
                    
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-3'/>
                    <label htmlFor="tab-button-3">Параметры</label>
                    
                    <input type="radio" name="orders-tab" className='tab-button' id='tab-button-4'/>
                    <label htmlFor="tab-button-4" onClick={() => navigate('/dashboard')}>Главная</label>

                    <div className='tab-content' id='content-1'>
                        <OrdersTable orders={ordersData} onOrderClick={handleOrderClick} />
                    </div>

                    <div className='tab-content' id='content-2'>
                        <ClientsTable clients={clientsData} onClientClick={handleClientClick} />
                    </div>

                    <div className='tab-content' id='content-3'>
                        <SettingsGrid groups={settingsGroups} onEditGroup={handleEditGroup} />
                        <div className='settings-footer'>
                            <button className='add-button'>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>

            <OrderModal order={selectedOrder} onClose={closeModal} />
            <ClientModal client={selectedClient} onClose={closeModal} />
            <EditGroupModal group={editingGroup} onClose={closeModal} />
        </div>
    );
};

export default Orders;