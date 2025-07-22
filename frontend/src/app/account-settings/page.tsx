'use client';

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/dashboard.css';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    company: 'Acme Real Estate',
    address: '123 Main St',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="main-content">
        <div className="settings-container">
          
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 className="contact-title">Account Settings</h1>
            <p className="contact-paragraph">
              Manage your account preferences and billing information.
            </p>
          </div>

          {/* Tabs */}
          <div className="settings-tabs">
            <button
              className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              className={`settings-tab ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              Billing
            </button>
            <button
              className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button
              className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
          </div>

          {/* Profile Tab */}
          <div className={`settings-content ${activeTab === 'profile' ? 'active' : ''}`}>
            <div className="settings-section">
              <h3>Personal Information</h3>
              <div className="settings-form">
                <div className="settings-form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="settings-form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>Address Information</h3>
              <div className="settings-form">
                <div className="form-group">
                  <label className="form-label">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="settings-form-row">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <select
                      name="state"
                      className="form-control"
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                </div>
                <div className="form-group" style={{ maxWidth: '300px' }}>
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Billing Tab */}
          <div className={`settings-content ${activeTab === 'billing' ? 'active' : ''}`}>
            <div className="settings-section">
              <h3>Current Plan</h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1.5rem',
                background: 'var(--gray-50)',
                borderRadius: '8px',
                marginBottom: '2rem'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text)' }}>Professional Plan</h4>
                  <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    Unlimited deeds • Priority support • Advanced features
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text)' }}>$29</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>per month</div>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>Payment Methods</h3>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  border: '1px solid var(--secondary-light)',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '25px',
                    background: 'var(--primary-dark)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginRight: '1rem'
                  }}>VISA</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '500', color: 'var(--text)' }}>•••• •••• •••• 4242</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>Expires 12/26</div>
                  </div>
                  <span style={{
                    background: 'rgba(163, 230, 53, 0.1)',
                    color: '#365314',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Default</span>
                </div>
              </div>
              <button 
                style={{
                  background: 'var(--background)',
                  border: '2px solid var(--secondary-light)',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  color: 'var(--text)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-400)';
                  e.currentTarget.style.background = 'var(--gray-50)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--secondary-light)';
                  e.currentTarget.style.background = 'var(--background)';
                }}
              >
                + Add Payment Method
              </button>
            </div>

            <div className="settings-section">
              <h3>Billing History</h3>
              <div className="table-responsive">
                <table className="table w-100 table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jan 15, 2024</td>
                      <td>Professional Plan - Monthly</td>
                      <td>$29.00</td>
                      <td><span className="badge badge-success">Paid</span></td>
                    </tr>
                    <tr>
                      <td>Dec 15, 2023</td>
                      <td>Professional Plan - Monthly</td>
                      <td>$29.00</td>
                      <td><span className="badge badge-success">Paid</span></td>
                    </tr>
                    <tr>
                      <td>Nov 15, 2023</td>
                      <td>Professional Plan - Monthly</td>
                      <td>$29.00</td>
                      <td><span className="badge badge-success">Paid</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Notifications Tab */}
          <div className={`settings-content ${activeTab === 'notifications' ? 'active' : ''}`}>
            <div className="settings-section">
              <h3>Email Notifications</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { id: 'deed-completed', label: 'Deed completion notifications', description: 'Get notified when your deeds are ready' },
                  { id: 'payment-receipts', label: 'Payment receipts', description: 'Receive receipts for all payments' },
                  { id: 'shared-deed-updates', label: 'Shared deed updates', description: 'Notifications when shared deeds are approved or rejected' },
                  { id: 'marketing', label: 'Marketing communications', description: 'Product updates and feature announcements' }
                ].map((item) => (
                  <label key={item.id} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '1rem',
                    padding: '1rem',
                    border: '1px solid var(--secondary-light)',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}>
                    <input 
                      type="checkbox" 
                      defaultChecked={item.id !== 'marketing'} 
                      style={{ marginTop: '0.25rem' }}
                    />
                    <div>
                      <div style={{ fontWeight: '500', color: 'var(--text)' }}>{item.label}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{item.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Security Tab */}
          <div className={`settings-content ${activeTab === 'security' ? 'active' : ''}`}>
            <div className="settings-section">
              <h3>Change Password</h3>
              <div className="settings-form" style={{ maxWidth: '500px' }}>
                <div className="form-group">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button className="wizard-btn wizard-btn-primary">
                  Update Password
                </button>
              </div>
            </div>

            <div className="settings-section">
              <h3>Two-Factor Authentication</h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1.5rem',
                background: 'var(--gray-50)',
                borderRadius: '8px'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text)' }}>SMS Authentication</h4>
                  <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    Add an extra layer of security to your account
                  </p>
                </div>
                <button className="wizard-btn wizard-btn-secondary">
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          {activeTab === 'profile' && (
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--secondary-light)' }}>
              <button 
                className="wizard-btn wizard-btn-primary"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 