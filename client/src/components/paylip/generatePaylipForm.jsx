import React, { useState } from 'react';
import { Plus, X, Loader2 } from 'lucide-react';

const GeneratePaylipForm = ({ employees, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOpen(false);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="btn-generate"
      >
        <Plus size={16} />
        Generate Payslip
      </button>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="modal-title">Generate Monthly Pay Slip</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="modal-close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="modal-form">
          {/* Employee Dropdown */}
          <div className="form-group">
            <label className="form-label">Employee</label>
            <select name="employeeId" required className="form-input">
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id || emp._id} value={emp.id || emp._id}>
                  {emp.firstName} {emp.lastName} ({emp.position})
                </option>
              ))}
            </select>
          </div>

          {/* Month & Year */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Month</label>
              <select name="month" required className="form-input">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>
                    {new Date(2000, m - 1).toLocaleString('default', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Year</label>
              <input
                type="number"
                name="year"
                defaultValue={new Date().getFullYear()}
                required
                className="form-input"
              />
            </div>
          </div>

          {/* Basic Salary */}
          <div className="form-group">
            <label className="form-label">Basic Salary ($)</label>
            <input
              type="number"
              name="basicSalary"
              placeholder="e.g. 5000"
              required
              className="form-input"
            />
          </div>

          {/* Allowances & Deductions */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Allowances ($)</label>
              <input
                type="number"
                name="allowances"
                defaultValue="0"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Deductions ($)</label>
              <input
                type="number"
                name="deductions"
                defaultValue="0"
                className="form-input"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="modal-actions">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn-cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-submit"
            >
              {loading && <Loader2 size={16} className="spin" />}
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneratePaylipForm;