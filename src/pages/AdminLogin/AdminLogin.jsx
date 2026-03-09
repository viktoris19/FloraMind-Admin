import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        setIsLoading(true);
        setError('');

        setTimeout(() => {
            if (email === 'admin@example.com' && password === 'admin123') {
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/Dashboard'); // ПЕРЕХОД НА DASHBOARD
            } else {
                setError('Неверный email или пароль');
                setIsLoading(false);
            }
        }, 1000);
    }

    return (
    <div className='admin-login-container'>
        <div className='admin-login-card'>
            <h1 className='admin-login-title'>Администратор</h1>
            <form onSubmit={handleSubmit} className="admin-login-form">
                <div className='form-group'>
                    <label htmlFor="email" className='form-label'>
                        E-mail:
                    </label>
                    <input type="email" id='email' className='form-input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Введите e-mail' disabled={isLoading}
              required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='form-label'>
                        Пароль:
                    </label>
                    <input type="password" id='password'className='form-input' value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              disabled={isLoading}
              required/>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type='submit' className='login-button' disabled={isLoading}>{isLoading ? 'Вход...' : 'Войти'}</button>
            </form>
            <div className='forgot-password-link'>
                <a href="/forgot-password" className='forgot-link'>Забыли пароль?</a>
            </div>
        </div>
    </div>
    );
};

export default AdminLogin;