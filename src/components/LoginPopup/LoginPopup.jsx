import React, { useState } from 'react';
// import './LoginSignupPage.css';
import './LoginPopup.css';
const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              className="auth-input"
              required
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="auth-footer">
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span
            className="auth-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
