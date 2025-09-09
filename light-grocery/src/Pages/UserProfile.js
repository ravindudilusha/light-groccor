import React, { useState } from "react";
import { Card, Button, Table, Form, Modal } from "react-bootstrap";
import "../styles/UserProfiles.css"; // custom CSS overrides

function UserProfile() {
  const [activeTab, setActiveTab] = useState("account");
  const [expandedOrder, setExpandedOrder] = useState(null);

  // Address state
  const [addresses, setAddresses] = useState([
    { id: 1, label: "Home", address: "123 Main Street, Colombo" },
    { id: 2, label: "Office", address: "456 Business Road, Colombo" },
  ]);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState({ label: "", address: "" });

  const handleAddAddress = () => {
    if (newAddress.label && newAddress.address) {
      setAddresses([...addresses, { id: Date.now(), ...newAddress }]);
      setNewAddress({ label: "", address: "" });
      setShowModal(false);
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  // Sample Orders
  const [orders] = useState([
    {
      id: 1,
      orderId: "IN-20-07-07-106707-25",
      customer: "Ravidu Dilusha",
      address: "Egoda Uyana",
      status: "Delivered",
      date: "2020-07-07",
      total: "Rs. 2,890",
      shipping: "Standard",
      payment: "SAMPATH_PAYCROP",
      items: [
        {
          name: "RUM BALL CHOCOLATE HEART GATEAU - 1kg (2.2 lbs)",
          qty: 1,
          price: "Rs. 2,640",
          total: "Rs. 2,640",
        },
      ],
    },
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <Card className="p-4 shadow-sm border-card">
            <h4>Account Details</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter mobile number" />
              </Form.Group>
              <Button className="primary-btn" size="sm">
                Update
              </Button>
            </Form>
          </Card>
        );

      case "addresses":
        return (
          <Card className="p-4 shadow-sm border-card">
            <h4>Saved Addresses</h4>
            <div className="row">
              {addresses.map((addr) => (
                <div className="col-md-6 mb-3" key={addr.id}>
                  <Card className="p-3 position-relative shadow-sm border-card">
                    <button
                      className="btn btn-sm btn-danger position-absolute"
                      style={{ top: "10px", right: "10px" }}
                      onClick={() => handleDeleteAddress(addr.id)}
                    >
                      ✕
                    </button>
                    <h6 className="fw-bold">{addr.label}</h6>
                    <p className="mb-0 text-muted">{addr.address}</p>
                  </Card>
                </div>
              ))}
            </div>
            <Button className="primary-btn" size="sm" onClick={() => setShowModal(true)}>
              + Add New Address
            </Button>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Add New Address</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      type="text"
                      value={newAddress.label}
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, label: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={newAddress.address}
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, address: e.target.value })
                      }
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button className="primary-btn" size="sm" onClick={handleAddAddress}>
                  Save Address
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
        );

      case "payment":
        return (
          <Card className="p-4 shadow-sm border-card">
            <h4>Payment Methods</h4>
            <div className="d-flex gap-3 flex-wrap">
              <Card className="p-3 text-center border-primary border-card" style={{ width: "12rem" }}>
                <h6>💳 Visa</h6>
                <p>**** **** **** 1234</p>
              </Card>
              <Card className="p-3 text-center border-success border-card" style={{ width: "12rem" }}>
                <h6>🏦 Sampath Bank</h6>
                <p>**** **** **** 5678</p>
              </Card>
            </div>
            <Button className="primary-btn mt-3" size="sm">
              + Add Payment Method
            </Button>
          </Card>
        );

      case "orders":
        return (
          <Card className="p-4 shadow-sm border-card">
            <h4 className="mb-3">Order History</h4>
            <Table responsive hover className="align-middle">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <React.Fragment key={order.id}>
                    <tr>
                      <td>
                        <span className="badge bg-info text-dark">{order.orderId}</span>
                      </td>
                      <td>{order.customer}</td>
                      <td>{order.address}</td>
                      <td>
                        <span className="badge bg-success">{order.status}</span>
                      </td>
                      <td>
                        <Button
                          className="custom-btn"
                          size="sm"
                          onClick={() =>
                            setExpandedOrder(expandedOrder === order.id ? null : order.id)
                          }
                        >
                          {expandedOrder === order.id ? "▲" : "▼"}
                        </Button>
                      </td>
                    </tr>
                    {expandedOrder === order.id && (
                      <tr>
                        <td colSpan="5" className="bg-light">
                          <div className="p-3">
                            <div className="row mb-2">
                              <div className="col-md-3">
                                <strong>Date:</strong> {order.date}
                              </div>
                              <div className="col-md-3">
                                <strong>Total:</strong> {order.total}
                              </div>
                              <div className="col-md-3">
                                <strong>Shipping:</strong> {order.shipping}
                              </div>
                              <div className="col-md-3">
                                <strong>Payment:</strong> {order.payment}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4 custom-tabs">
        <li className="nav-item">
          <button
            className={activeTab === "account" ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab("account")}
          >
            Account Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={activeTab === "addresses" ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab("addresses")}
          >
            Saved Addresses
          </button>
        </li>
        <li className="nav-item">
          <button
            className={activeTab === "payment" ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab("payment")}
          >
            Payment Methods
          </button>
        </li>
        <li className="nav-item">
          <button
            className={activeTab === "orders" ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab("orders")}
          >
            Order History
          </button>
        </li>
      </ul>

      {/* Content */}
      {renderContent()}
    </div>
  );
}

export default UserProfile;
