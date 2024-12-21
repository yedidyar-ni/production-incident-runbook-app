import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import type { IncidentType, Severity } from '../types/incident';

const SERVICES = [
  'Authentication Service',
  'Payment Processing',
  'User API',
  'Database Cluster',
  'Message Queue',
  'Cache Layer',
];

export function IncidentForm() {
  const [formData, setFormData] = useState({
    type: '' as IncidentType,
    severity: '' as Severity,
    description: '',
    affectedServices: [] as string[],
    eta: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Incident reported:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Incident Type
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as IncidentType })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select type...</option>
            <option value="service_outage">Service Outage</option>
            <option value="performance_degradation">Performance Degradation</option>
            <option value="security_breach">Security Breach</option>
            <option value="data_issue">Data Issue</option>
            <option value="infrastructure_problem">Infrastructure Problem</option>
          </select>
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Severity
          <select
            value={formData.severity}
            onChange={(e) => setFormData({ ...formData, severity: e.target.value as Severity })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select severity...</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Description
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            required
          />
        </label>
      </div>

      <div className="space-y-2">
        <span className="block text-sm font-medium text-gray-700">Affected Services</span>
        <div className="space-y-2">
          {SERVICES.map((service) => (
            <label key={service} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.affectedServices.includes(service)}
                onChange={(e) => {
                  const services = e.target.checked
                    ? [...formData.affectedServices, service]
                    : formData.affectedServices.filter((s) => s !== service);
                  setFormData({ ...formData, affectedServices: services });
                }}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          ETA for Resolution (optional)
          <input
            type="datetime-local"
            value={formData.eta}
            onChange={(e) => setFormData({ ...formData, eta: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <AlertCircle className="w-5 h-5 mr-2" />
        Report Incident
      </button>
    </form>
  );
}
