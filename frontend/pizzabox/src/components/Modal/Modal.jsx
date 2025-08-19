import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.jpg' // Adjust the path as necessary

const Modal = () => {
  const [show, setShow] = useState(false);
  const [orderType, setOrderType] = useState(null); // delivery | pickup

  // Open modal automatically on first render
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      {/* Modal */}
      {show && (
        <div className="modal show fade d-block"
          tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <div className="text-center">
                  <img src={logo} alt="" style={{ width: '60px', height: '60px' }}/>
                  <h5>Select Your Order Type</h5>

                  {/* Buttons */}
                  <div className="mb-3">
                    <button className={`btn me-2 ${
                        orderType === 'delivery' ? 'btn-danger' : 'btn-outline-danger'}`}
                      onClick={() => setOrderType('delivery')}>DELIVERY
                    </button>

                    <button
                      className={`btn ${
                        orderType === 'pickup' ? 'btn-secondary' : 'btn-outline-secondary'
                      }`}
                      onClick={() => setOrderType('pickup')}
                    >
                      PICK-UP
                    </button>
                  </div>

                  {/* Conditional Forms */}
                  {orderType === 'delivery' && (
                    <div className="form-group text-start">
                      <label className="form-label fw-semibold">City</label>
                      <input
                        type="text"
                        className="form-control mb-3 shadow-sm"
                        placeholder="Peshawar"
                      />

                      <label className="form-label fw-semibold">Select Area</label>
                      <input
                        type="text"
                        className="form-control mb-3 shadow-sm"
                        placeholder="Area"
                      />

                      <label className="form-label fw-semibold">Region</label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Region"
                      />
                    </div>
                  )}

                  {orderType === 'pickup' && (
                    <div className="form-group text-start">
                      <label className="form-label fw-semibold">City</label>
                      <input
                        type="text"
                        className="form-control mb-3 shadow-sm"
                        placeholder="Peshawar"
                      />

                      <label className="form-label fw-semibold">Select Branch</label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Branch Name"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
