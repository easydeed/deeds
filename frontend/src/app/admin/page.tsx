'use client';

import React, { useState, useEffect } from 'react';
import '../../styles/dashboard.css';

interface AdminStats {
  total_users: number;
  active_users: number;
  total_deeds: number;
  deeds_this_month: number;
  total_revenue: number;
  monthly_revenue: number;
  api_calls_today: number;
  api_calls_month: number;
  system_health: string;
  active_integrations: number;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  subscription_plan: string;
  subscription_status: string;
  total_deeds: number;
  monthly_revenue: number;
  created_at: string;
  last_login: string;
  is_active: boolean;
  api_key?: string;
  api_calls_this_month: number;
  integrations: string[];
  company?: string;
  role?: string;
}

interface Deed {
  id: number;
  user_email: string;
  user_name: string;
  deed_type: string;
  property_address: string;
  status: string;
  created_at: string;
  shared_count: number;
  approval_count: number;
  ai_assistance_used: boolean;
  api_generated: boolean;
  integration_source?: string;
}

interface ApiUsage {
  user_id: number;
  user_email: string;
  endpoint: string;
  calls_today: number;
  calls_month: number;
  last_call: string;
  status: string;
}

interface Integration {
  id: number;
  name: string;
  type: 'softpro' | 'qualia' | 'custom';
  status: string;
  users_count: number;
  calls_today: number;
  last_sync: string;
  webhook_url?: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState<AdminStats>({
    total_users: 0,
    active_users: 0,
    total_deeds: 0,
    deeds_this_month: 0,
    total_revenue: 0,
    monthly_revenue: 0,
    api_calls_today: 0,
    api_calls_month: 0,
    system_health: 'healthy',
    active_integrations: 0
  });
  const [users, setUsers] = useState<User[]>([]);
  const [deeds, setDeeds] = useState<Deed[]>([]);
  const [apiUsage, setApiUsage] = useState<ApiUsage[]>([]);
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls to admin endpoints
    setTimeout(() => {
      setStats({
        total_users: 1247,
        active_users: 892,
        total_deeds: 3456,
        deeds_this_month: 234,
        total_revenue: 45230.50,
        monthly_revenue: 8750.25,
        api_calls_today: 15420,
        api_calls_month: 284750,
        system_health: 'healthy',
        active_integrations: 156
      });

      setUsers([
        {
          id: 1,
          email: "john@example.com",
          first_name: "John",
          last_name: "Doe",
          subscription_plan: "enterprise",
          subscription_status: "active",
          total_deeds: 45,
          monthly_revenue: 299.99,
          created_at: "2024-01-01",
          last_login: "2024-01-15",
          is_active: true,
          api_key: "dp_live_123456789",
          api_calls_this_month: 2847,
          integrations: ["SoftPro 360", "Qualia"],
          company: "ABC Title Company",
          role: "Escrow Officer"
        },
        {
          id: 2,
          email: "jane@company.com",
          first_name: "Jane",
          last_name: "Smith",
          subscription_plan: "professional",
          subscription_status: "active",
          total_deeds: 23,
          monthly_revenue: 89.99,
          created_at: "2024-01-05",
          last_login: "2024-01-14",
          is_active: true,
          api_key: "dp_live_987654321",
          api_calls_this_month: 156,
          integrations: ["SoftPro 360"],
          company: "Smith Real Estate",
          role: "Real Estate Agent"
        },
        {
          id: 3,
          email: "bob@firm.com",
          first_name: "Bob",
          last_name: "Wilson",
          subscription_plan: "starter",
          subscription_status: "active",
          total_deeds: 8,
          monthly_revenue: 29.99,
          created_at: "2024-01-10",
          last_login: "2024-01-13",
          is_active: true,
          api_calls_this_month: 0,
          integrations: [],
          company: "Wilson Law Firm",
          role: "Attorney"
        }
      ]);

      setDeeds([
        {
          id: 1,
          user_email: "john@example.com",
          user_name: "John Doe",
          deed_type: "Quitclaim Deed",
          property_address: "123 Main St, Los Angeles, CA",
          status: "completed",
          created_at: "2024-01-10",
          shared_count: 2,
          approval_count: 1,
          ai_assistance_used: true,
          api_generated: true,
          integration_source: "SoftPro 360"
        },
        {
          id: 2,
          user_email: "jane@company.com",
          user_name: "Jane Smith",
          deed_type: "Grant Deed",
          property_address: "456 Oak Ave, Beverly Hills, CA",
          status: "draft",
          created_at: "2024-01-14",
          shared_count: 0,
          approval_count: 0,
          ai_assistance_used: true,
          api_generated: false
        }
      ]);

      setApiUsage([
        {
          user_id: 1,
          user_email: "john@example.com",
          endpoint: "/api/v1/softpro/webhook",
          calls_today: 45,
          calls_month: 2847,
          last_call: "2024-01-15T10:30:00Z",
          status: "active"
        },
        {
          user_id: 1,
          user_email: "john@example.com",
          endpoint: "/api/v1/qualia/graphql",
          calls_today: 23,
          calls_month: 1567,
          last_call: "2024-01-15T09:15:00Z",
          status: "active"
        },
        {
          user_id: 2,
          user_email: "jane@company.com",
          endpoint: "/api/v1/softpro/webhook",
          calls_today: 12,
          calls_month: 156,
          last_call: "2024-01-15T08:45:00Z",
          status: "active"
        }
      ]);

      setIntegrations([
        {
          id: 1,
          name: "SoftPro 360",
          type: "softpro",
          status: "active",
          users_count: 89,
          calls_today: 1247,
          last_sync: "2024-01-15T10:30:00Z",
          webhook_url: "https://api.deedpro.io/webhooks/softpro"
        },
        {
          id: 2,
          name: "Qualia",
          type: "qualia",
          status: "active",
          users_count: 67,
          calls_today: 892,
          last_sync: "2024-01-15T09:15:00Z"
        }
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const tabStyle = (isActive: boolean) => ({
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px 8px 0 0',
    cursor: 'pointer',
    backgroundColor: isActive ? '#6A49F2' : '#f8f9fa',
    color: isActive ? 'white' : '#6c757d',
    marginRight: '0.25rem'
  });

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    padding: '2rem',
    margin: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const statCardStyle = {
    backgroundColor: 'white',
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    padding: '1.5rem',
    textAlign: 'center' as const,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: '1rem'
  };

  const thStyle = {
    backgroundColor: '#6A49F2',
    color: 'white',
    padding: '1rem',
    textAlign: 'left' as const,
    fontWeight: 'bold'
  };

  const tdStyle = {
    padding: '1rem',
    borderBottom: '1px solid #dee2e6'
  };

  const getStatusBadge = (status: string, isActive?: boolean) => {
    let color = '#6c757d';
    if (status === 'active' || isActive === true) color = '#28a745';
    if (status === 'cancelled' || isActive === false) color = '#dc3545';
    if (status === 'completed') color = '#28a745';
    if (status === 'draft') color = '#ffc107';

    return (
      <span style={{
        backgroundColor: color,
        color: color === '#ffc107' ? '#000' : '#fff',
        padding: '0.25rem 0.75rem',
        borderRadius: '12px',
        fontSize: '0.875rem',
        fontWeight: 'bold'
      }}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ fontSize: '1.5rem', color: '#6A49F2' }}>Loading Admin Dashboard...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Enterprise Admin Console
          </span>
        </div>
        <h1 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          DeedPro Admin Dashboard
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '1rem' }}>
          Comprehensive platform management, API monitoring, and enterprise analytics
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ backgroundColor: '#e3f2fd', color: '#1976d2', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            ⚡ System Health: {stats.system_health}
          </span>
          <span style={{ backgroundColor: '#e8f5e8', color: '#2e7d32', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            🔗 {stats.active_integrations} Active Integrations
          </span>
          <span style={{ backgroundColor: '#fff3e0', color: '#f57c00', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            📊 {stats.api_calls_today.toLocaleString()} API Calls Today
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button onClick={() => setActiveTab('overview')} style={tabStyle(activeTab === 'overview')}>
          📊 Overview
        </button>
        <button onClick={() => setActiveTab('users')} style={tabStyle(activeTab === 'users')}>
          👥 User Management
        </button>
        <button onClick={() => setActiveTab('api')} style={tabStyle(activeTab === 'api')}>
          🔗 API & Integrations
        </button>
        <button onClick={() => setActiveTab('deeds')} style={tabStyle(activeTab === 'deeds')}>
          📄 All Deeds
        </button>
        <button onClick={() => setActiveTab('revenue')} style={tabStyle(activeTab === 'revenue')}>
          💰 Revenue Analytics
        </button>
        <button onClick={() => setActiveTab('system')} style={tabStyle(activeTab === 'system')}>
          ⚙️ System Health
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={statCardStyle}>
              <h3 style={{ color: '#6A49F2', margin: '0 0 0.5rem 0' }}>👥 Total Users</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>{stats.total_users.toLocaleString()}</div>
              <div style={{ color: '#28a745', fontSize: '0.9rem' }}>{stats.active_users} active</div>
            </div>
            <div style={statCardStyle}>
              <h3 style={{ color: '#6A49F2', margin: '0 0 0.5rem 0' }}>📄 Total Deeds</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>{stats.total_deeds.toLocaleString()}</div>
              <div style={{ color: '#17a2b8', fontSize: '0.9rem' }}>{stats.deeds_this_month} this month</div>
            </div>
            <div style={statCardStyle}>
              <h3 style={{ color: '#6A49F2', margin: '0 0 0.5rem 0' }}>💰 Total Revenue</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>${stats.total_revenue.toLocaleString()}</div>
              <div style={{ color: '#28a745', fontSize: '0.9rem' }}>${stats.monthly_revenue} this month</div>
            </div>
            <div style={statCardStyle}>
              <h3 style={{ color: '#6A49F2', margin: '0 0 0.5rem 0' }}>🔗 API Calls</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>{stats.api_calls_today.toLocaleString()}</div>
              <div style={{ color: '#17a2b8', fontSize: '0.9rem' }}>{stats.api_calls_month.toLocaleString()} this month</div>
            </div>
            <div style={statCardStyle}>
              <h3 style={{ color: '#6A49F2', margin: '0 0 0.5rem 0' }}>⚙️ System Health</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>{stats.system_health}</div>
              <div style={{ color: '#17a2b8', fontSize: '0.9rem' }}>99.9% uptime</div>
            </div>
            <div style={statCardStyle}>
              <h3 style={{ color: '#6A49F2', margin: '0 0 0.5rem 0' }}>🔗 Integrations</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>{stats.active_integrations}</div>
              <div style={{ color: '#17a2b8', fontSize: '0.9rem' }}>SoftPro & Qualia</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={cardStyle}>
            <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>🚀 Quick Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <button style={{
                backgroundColor: '#6A49F2',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                📧 Send Platform Announcement
              </button>
              <button style={{
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                📊 Generate Revenue Report
              </button>
              <button style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                🔄 System Health Check
              </button>
              <button style={{
                backgroundColor: '#ffc107',
                color: '#000',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                🔑 Manage API Keys
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: '#6A49F2', margin: 0 }}>👥 User Management ({users.length.toLocaleString()} users)</h3>
            <div>
              <input 
                type="text" 
                placeholder="Search users..." 
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  marginRight: '1rem'
                }}
              />
              <button style={{
                backgroundColor: '#6A49F2',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Export Users
              </button>
            </div>
          </div>
          
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>User</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Plan</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>API Usage</th>
                <th style={thStyle}>Integrations</th>
                <th style={thStyle}>Revenue</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td style={tdStyle}>
                    <strong>{user.first_name} {user.last_name}</strong>
                    <br />
                    <small style={{ color: '#6c757d' }}>{user.company} • {user.role}</small>
                  </td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>
                    <span style={{
                      backgroundColor: user.subscription_plan === 'enterprise' ? '#6f42c1' : user.subscription_plan === 'professional' ? '#17a2b8' : '#6c757d',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.875rem'
                    }}>
                      {user.subscription_plan.toUpperCase()}
                    </span>
                  </td>
                  <td style={tdStyle}>{getStatusBadge(user.subscription_status)}</td>
                  <td style={tdStyle}>
                    <div>{user.api_calls_this_month} calls</div>
                    <small style={{ color: '#6c757d' }}>{user.api_key ? 'API Key Active' : 'No API Access'}</small>
                  </td>
                  <td style={tdStyle}>
                    {user.integrations.map((integration, idx) => (
                      <span key={idx} style={{
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        marginRight: '0.25rem'
                      }}>
                        {integration}
                      </span>
                    ))}
                  </td>
                  <td style={tdStyle}>${user.monthly_revenue}</td>
                  <td style={tdStyle}>
                    <button style={{
                      backgroundColor: '#17a2b8',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '0.25rem',
                      fontSize: '0.875rem'
                    }}>
                      View
                    </button>
                    <button style={{
                      backgroundColor: '#ffc107',
                      color: '#000',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* API & Integrations Tab */}
      {activeTab === 'api' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={cardStyle}>
              <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>🔗 API Usage Overview</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Total API Calls Today</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
                  {stats.api_calls_today.toLocaleString()}
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Monthly API Calls</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#17a2b8' }}>
                  {stats.api_calls_month.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Active API Keys</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#6A49F2' }}>
                  {users.filter(u => u.api_key).length}
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>🔗 Integration Status</h3>
              {integrations.map(integration => (
                <div key={integration.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong>{integration.name}</strong>
                    <span style={{
                      backgroundColor: integration.status === 'active' ? '#28a745' : '#dc3545',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.875rem'
                    }}>
                      {integration.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                    {integration.users_count} users • {integration.calls_today} calls today
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>📊 API Usage by Endpoint</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>User</th>
                  <th style={thStyle}>Endpoint</th>
                  <th style={thStyle}>Calls Today</th>
                  <th style={thStyle}>Calls Month</th>
                  <th style={thStyle}>Last Call</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {apiUsage.map((usage, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{usage.user_email}</td>
                    <td style={tdStyle}>
                      <code style={{ backgroundColor: '#f8f9fa', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                        {usage.endpoint}
                      </code>
                    </td>
                    <td style={tdStyle}>{usage.calls_today}</td>
                    <td style={tdStyle}>{usage.calls_month.toLocaleString()}</td>
                    <td style={tdStyle}>{new Date(usage.last_call).toLocaleString()}</td>
                    <td style={tdStyle}>{getStatusBadge(usage.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Deeds Tab */}
      {activeTab === 'deeds' && (
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: '#6A49F2', margin: 0 }}>📄 All Deeds ({deeds.length.toLocaleString()} total)</h3>
            <div>
              <select style={{
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid #ddd',
                marginRight: '1rem'
              }}>
                <option>All Statuses</option>
                <option>Completed</option>
                <option>Draft</option>
                <option>Pending</option>
              </select>
              <button style={{
                backgroundColor: '#6A49F2',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Export Deeds
              </button>
            </div>
          </div>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Deed ID</th>
                <th style={thStyle}>User</th>
                <th style={thStyle}>Property</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>AI/API</th>
                <th style={thStyle}>Created</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deeds.map(deed => (
                <tr key={deed.id}>
                  <td style={tdStyle}>
                    <strong>#{deed.id}</strong>
                  </td>
                  <td style={tdStyle}>
                    <strong>{deed.user_name}</strong>
                    <br />
                    <small style={{ color: '#6c757d' }}>{deed.user_email}</small>
                  </td>
                  <td style={tdStyle}>{deed.property_address}</td>
                  <td style={tdStyle}>{deed.deed_type}</td>
                  <td style={tdStyle}>{getStatusBadge(deed.status)}</td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {deed.ai_assistance_used && (
                        <span style={{ backgroundColor: '#e3f2fd', color: '#1976d2', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                          🤖 AI
                        </span>
                      )}
                      {deed.api_generated && (
                        <span style={{ backgroundColor: '#e8f5e8', color: '#2e7d32', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                          🔗 API
                        </span>
                      )}
                      {deed.integration_source && (
                        <span style={{ backgroundColor: '#fff3e0', color: '#f57c00', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                          {deed.integration_source}
                        </span>
                      )}
                    </div>
                  </td>
                  <td style={tdStyle}>{new Date(deed.created_at).toLocaleDateString()}</td>
                  <td style={tdStyle}>
                    <button style={{
                      backgroundColor: '#17a2b8',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '0.25rem',
                      fontSize: '0.875rem'
                    }}>
                      View
                    </button>
                    <button style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Revenue Tab */}
      {activeTab === 'revenue' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={cardStyle}>
              <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>💰 Revenue Overview</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Total Revenue</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
                  ${stats.total_revenue.toLocaleString()}
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Monthly Revenue</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#17a2b8' }}>
                  ${stats.monthly_revenue.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Average per User</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#6A49F2' }}>
                  ${(stats.total_revenue / stats.total_users).toFixed(2)}
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>📊 Subscription Breakdown</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Enterprise API</span>
                  <span style={{ fontWeight: 'bold' }}>268 users</span>
                </div>
                <div style={{ backgroundColor: '#6f42c1', height: '8px', borderRadius: '4px', marginBottom: '1rem' }}></div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Professional</span>
                  <span style={{ fontWeight: 'bold' }}>523 users</span>
                </div>
                <div style={{ backgroundColor: '#17a2b8', height: '8px', borderRadius: '4px', marginBottom: '1rem' }}></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Starter</span>
                  <span style={{ fontWeight: 'bold' }}>456 users</span>
                </div>
                <div style={{ backgroundColor: '#6c757d', height: '8px', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>🏆 Top Revenue Generators</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Rank</th>
                  <th style={thStyle}>User</th>
                  <th style={thStyle}>Total Paid</th>
                  <th style={thStyle}>Plan</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>🥇 1</td>
                  <td style={tdStyle}>john@example.com</td>
                  <td style={tdStyle}><strong>$359.88</strong></td>
                  <td style={tdStyle}>{getStatusBadge('enterprise')}</td>
                  <td style={tdStyle}>
                    <button style={{
                      backgroundColor: '#17a2b8',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      View Profile
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>🥈 2</td>
                  <td style={tdStyle}>sarah@lawfirm.com</td>
                  <td style={tdStyle}><strong>$299.88</strong></td>
                  <td style={tdStyle}>{getStatusBadge('enterprise')}</td>
                  <td style={tdStyle}>
                    <button style={{
                      backgroundColor: '#17a2b8',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      View Profile
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>🥉 3</td>
                  <td style={tdStyle}>mike@realty.com</td>
                  <td style={tdStyle}><strong>$239.91</strong></td>
                  <td style={tdStyle}>{getStatusBadge('professional')}</td>
                  <td style={tdStyle}>
                    <button style={{
                      backgroundColor: '#17a2b8',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      View Profile
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* System Health Tab */}
      {activeTab === 'system' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={cardStyle}>
              <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>⚙️ System Status</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span>Main API</span>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✅ Healthy</span>
                </div>
                <div style={{ backgroundColor: '#28a745', height: '8px', borderRadius: '4px', marginBottom: '1rem' }}></div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span>External API</span>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✅ Healthy</span>
                </div>
                <div style={{ backgroundColor: '#28a745', height: '8px', borderRadius: '4px', marginBottom: '1rem' }}></div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span>Database</span>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✅ Healthy</span>
                </div>
                <div style={{ backgroundColor: '#28a745', height: '8px', borderRadius: '4px', marginBottom: '1rem' }}></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span>AI Services</span>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✅ Healthy</span>
                </div>
                <div style={{ backgroundColor: '#28a745', height: '8px', borderRadius: '4px' }}></div>
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>📊 Performance Metrics</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Uptime</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>99.9%</div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Response Time</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#17a2b8' }}>45ms</div>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Error Rate</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#6A49F2' }}>0.01%</div>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: '#6A49F2', marginBottom: '1rem' }}>🔧 System Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <button style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                🔄 Restart Services
              </button>
              <button style={{
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                📊 View Logs
              </button>
              <button style={{
                backgroundColor: '#ffc107',
                color: '#000',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                🔧 Maintenance Mode
              </button>
              <button style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                🚨 Emergency Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 