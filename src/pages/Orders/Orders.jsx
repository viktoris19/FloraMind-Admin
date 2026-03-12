import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ordersData } from './data/ordersData';
import { clientsData } from './data/clientsData';
import { settingsGroups } from './data/settingsData';
import OrdersTable from './components/OrdersTable';
import ClientsTable from './components/ClientsTable';
import SettingsGrid from './components/SettingsGrid';
import OrderModal from './components/OrderModal';
import EditOrderModal from './components/EditOrderModal';
import ClientModal from './components/ClientModal';
import EditGroupModal from './components/EditGroupModal';
import EditClientModal from './components/EditClientModal';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [editingOrder, setEditingOrder] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [editingGroup, setEditingGroup] = useState(null);
    const [editingClient, setEditingClient] = useState(null);

    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        
        if (tab) {
            if (tab === 'orders') {
                document.getElementById('tab-button-1')?.click();
            } else if (tab === 'clients') {
                document.getElementById('tab-button-2')?.click();
            } else if (tab === 'settings') {
                document.getElementById('tab-button-3')?.click();
            }
        }

        const orderId = params.get('id');
        if (orderId && tab === 'orders') {
            const order = ordersData.find(o => o.id === orderId);
            if (order) {
                setSelectedOrder(order);
            }
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
        setEditingOrder(null);
        setSelectedClient(null);
        setEditingGroup(null);
    };

    const handleEditOrder = (order) => {
        setEditingOrder(order);
        setSelectedOrder(null); 
    };

    const handleSaveOrder = (orderId, updatedData) => {
        console.log('Сохранение заказа:', orderId, updatedData);
    };

    const handleClientClick = (client) => {
        setSelectedClient(client);
        setSelectedOrder(null);
        setEditingOrder(null);
        setEditingGroup(null);
    };

    const handleEditGroup = (groupName, items) => {
        setEditingGroup({ name: groupName, items: items });
        setSelectedOrder(null);
        setEditingOrder(null);
        setSelectedClient(null);
    };

    const handleSaveGroup = (groupName, updatedItems) => {
        console.log('Сохранение группы:', groupName, updatedItems);
    };

    const handleEditClient = (client) => {
        console.log('Редактирование клиента:', client);
        setEditingClient(client);
        setSelectedClient(null);
    };

    const handleSaveClient = (clientId, updatedData) => {
        console.log('Сохранение клиента:', clientId, updatedData);
    };

    const closeModal = () => {
        setSelectedOrder(null);
        setEditingOrder(null);
        setSelectedClient(null);
        setEditingGroup(null);
        setEditingClient(null);
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
                    <input 
                        type="radio" 
                        name="orders-tab" 
                        className='tab-button' 
                        id='tab-button-1' 
                        defaultChecked
                    />
                    <label htmlFor="tab-button-1">Заказы</label>
                    
                    <input 
                        type="radio" 
                        name="orders-tab" 
                        className='tab-button' 
                        id='tab-button-2'
                    />
                    <label htmlFor="tab-button-2">Клиенты</label>
                    
                    <input 
                        type="radio" 
                        name="orders-tab" 
                        className='tab-button' 
                        id='tab-button-3'
                    />
                    <label htmlFor="tab-button-3">Параметры</label>
                    
                    <input 
                        type="radio" 
                        name="orders-tab" 
                        className='tab-button' 
                        id='tab-button-4'
                    />
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

            {/* Модалка просмотра заказа */}
            {selectedOrder && (
                <OrderModal 
                    order={selectedOrder} 
                    onClose={closeModal}
                    onEdit={handleEditOrder}
                />
            )}

            {/* Модалка редактирования заказа */}
            {editingOrder && (
                <EditOrderModal 
                    order={editingOrder}
                    onClose={closeModal}
                    onSave={handleSaveOrder}
                />
            )}

            {selectedClient && (
                <ClientModal 
                    client={selectedClient} 
                    onClose={closeModal} 
                    onEdit={handleEditClient}
                />
            )}

            {editingClient && (
                <EditClientModal 
                    client={editingClient}
                    onClose={closeModal}
                    onSave={handleSaveClient}
                />
            )}
            
            {editingGroup && (
                <EditGroupModal 
                    group={editingGroup} 
                    onClose={closeModal}
                    onSave={handleSaveGroup}
                />
            )}
        </div>
    );
};

export default Orders;