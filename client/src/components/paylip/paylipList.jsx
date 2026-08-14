import React from 'react';
import { Download } from 'lucide-react';
import { format } from 'date-fns';

const PaylipList = ({ paylips, isAdmin }) => {
  return (
    <div className="table-card">
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {isAdmin && <th>EMPLOYEE</th>}
              <th>PERIOD</th>
              <th>BASIC SALARY</th>
              <th>NET SALARY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {paylips.length === 0 ? (
              <tr>
                <td
                  colSpan={isAdmin ? 5 : 4}
                  className="table-empty"
                >
                  No pay slips found
                </td>
              </tr>
            ) : (
              paylips.map((paylip) => (
                <tr key={paylip.id || paylip._id} className="table-row">
                  {isAdmin && (
                    <td className="col-employee">
                      {paylip.employee?.firstName} {paylip.employee?.lastName}
                    </td>
                  )}
                  <td className="col-period">
                    {format(new Date(paylip.year, paylip.month - 1), 'MMMM yyyy')}
                  </td>
                  <td className="col-salary">
                    ${paylip.basicSalary?.toLocaleString()}
                  </td>
                  <td className="col-net">
                    ${paylip.netSalary?.toLocaleString()}
                  </td>
                  <td className="col-action">
                    <button
                      onClick={() =>
                        window.open(`/print/paylips/${paylip.id || paylip._id}`, '_blank')
                      }
                      className="btn-download"
                    >
                      <Download size={14} />
                      Download
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaylipList;