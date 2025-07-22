'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate authentication - replace with real API call
      if (email && password) {
        // For demo purposes, accept any email/password
        setTimeout(() => {
          localStorage.setItem('deedpro_user', JSON.stringify({
            email: email,
            name: 'Demo User',
            authenticated: true
          }));
          router.push('/dashboard');
        }, 1000);
      } else {
        setError('Please enter both email and password');
        setIsLoading(false);
      }
    } catch {
      setError('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6A49F2 0%, #8B5FE3 50%, #A855F7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    maxWidth: '450px',
    width: '100%',
    margin: '0 auto'
  };

  const logoStyle = {
    textAlign: 'center' as const,
    marginBottom: '2rem'
  };

  const logoTextStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#6A49F2',
    marginBottom: '0.5rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    marginBottom: '0.5rem',
    color: '#333'
  };

  const subtitleStyle = {
    textAlign: 'center' as const,
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333'
  };

  const inputStyle = {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #e1e5e9',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#f8f9fa'
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#6A49F2',
    backgroundColor: 'white',
    boxShadow: '0 0 0 3px rgba(106, 73, 242, 0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#6A49F2',
    color: 'white',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem'
  };

  const buttonHoverStyle = {
    backgroundColor: '#5A3DE0',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(106, 73, 242, 0.3)'
  };

  const buttonDisabledStyle = {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none'
  };

  const errorStyle = {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '0.75rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    textAlign: 'center' as const,
    border: '1px solid #fcc'
  };

  const backLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    position: 'absolute' as const,
    top: '2rem',
    left: '2rem',
    transition: 'all 0.3s ease'
  };

  const demoNoticeStyle = {
    backgroundColor: 'rgba(106, 73, 242, 0.1)',
    border: '1px solid rgba(106, 73, 242, 0.2)',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1.5rem',
    textAlign: 'center' as const
  };

  const demoTitleStyle = {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#6A49F2',
    marginBottom: '0.5rem'
  };

  const demoTextStyle = {
    fontSize: '0.8rem',
    color: '#666',
    lineHeight: '1.4'
  };

  return (
    <div style={containerStyle}>
      {/* Back to Home Link */}
      <Link 
        href="/" 
        style={backLinkStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        ← Back to Home
      </Link>

      <div style={cardStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          <div style={logoTextStyle}>📄 DeedPro</div>
        </div>

        {/* Title */}
        <h1 style={titleStyle}>Welcome Back</h1>
        <p style={subtitleStyle}>Sign in to access your dashboard</p>

        {/* Demo Notice */}
        <div style={demoNoticeStyle}>
          <div style={demoTitleStyle}>🚀 Demo Access</div>
          <div style={demoTextStyle}>
            Enter any email and password to access the demo dashboard.<br />
            This is a preview of the DeedPro platform.
          </div>
        </div>

        {/* Error Message */}
        {error && <div style={errorStyle}>{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={isLoading ? { ...buttonStyle, ...buttonDisabledStyle } : buttonStyle}
            onMouseEnter={(e) => {
              if (!isLoading) {
                Object.assign(e.currentTarget.style, buttonHoverStyle);
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                Object.assign(e.currentTarget.style, buttonStyle);
              }
            }}
          >
            {isLoading ? '🔄 Signing In...' : '🚀 Access Dashboard'}
          </button>
        </form>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center' as const, 
          marginTop: '2rem', 
          paddingTop: '1.5rem',
          borderTop: '1px solid #e1e5e9',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p>Don&apos;t have an account? <span style={{ color: '#6A49F2', fontWeight: 'bold' }}>Contact Sales</span></p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            © 2024 DeedPro. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
} 