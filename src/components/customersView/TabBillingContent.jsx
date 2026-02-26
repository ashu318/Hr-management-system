"use client";
import React from "react";
import { FiAlertOctagon, FiCheck, FiEye, FiMoreVertical, FiSend } from "react-icons/fi";

const TabBillingContent = ({ billingHistoryshow, user }) => {
  const billingHistory = [
    {
      id: "#258963",
      date: "02 NOV, 2022",
      amount: "$350",
      status: "Completed",
      statusColor: "success",
    },
    {
      id: "#987456",
      date: "05 DEC, 2022",
      amount: "$590",
      status: "Pending",
      statusColor: "warning",
    },
    {
      id: "#456321",
      date: "31 NOV, 2022",
      amount: "$450",
      status: "Rejected",
      statusColor: "danger",
    },
    {
      id: "#357951",
      date: "03 JAN, 2023",
      amount: "$250",
      status: "Completed",
      statusColor: "success",
    },
  ];
  return (
    <>
      <div className="alert alert-dismissible m-4 p-4 d-flex align-items-start alert-soft-teal-message" role="alert" style={{ borderRadius: '12px', color: "#3454d1" }}>
        {/* Icon */}
        {/* <div className="me-4 d-none d-md-block">
          <FiAlertOctagon className="fs-1 text-teal" />
        </div> */}

        {/* Content */}
        <div className="flex-fill">
          <p className="fw-bold mb-2 text-truncate-1-line">We need your attention!</p>
          <p className="fs-12 fw-medium mb-3">
            Your payment account details are incomplete. To continue using all tools, please review and update your accounts.
          </p>

          {/* Bank Accounts */}
          <div className="mb-3">
            {/* Example bank account */}
            <div className="card shadow-sm mb-2 p-3" style={{
              borderRadius: '10px', backgroundColor: '#f5f5f5', borderColor: "#3454d1"
            }}>
              < div className="d-flex justify-content-between align-items-center mb-2" >
                <span className="fw-bold">State Bank of India</span>
                <img src="/icons/bank.png" alt="bank logo" style={{ height: '28px' }} />
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Account Number</span>
                <span className="fw-semibold">{user?.financialDetails.accountNo || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">IFSC</span>
                <span className="fw-semibold">{user?.financialDetails.ifscCode || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Account Holder</span>
                <span className="fw-semibold">{user?.financialDetails.bankName || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Account Holder</span>
                <span className="fw-semibold">{user?.fullName || "John Doe"}</span>
              </div>
            </div>
          </div>
        </div >

      </div >
      <div className="alert alert-dismissible m-4 p-4 d-flex align-items-start alert-soft-teal-message" role="alert" style={{ borderRadius: '12px', color: "#17c666 " }}>
        {/* Icon */}
        {/* <div className="me-4 d-none d-md-block">
          <FiAlertOctagon className="fs-1 text-teal" />
        </div> */}

        {/* Content */}
        <div className="flex-fill">
          <p className="fw-bold mb-2 text-truncate-1-line">  Financial & Statutory Details</p>
          <p className="fs-12 fw-medium mb-3">
            Below are the employee's registered statutory and financial identification details including UAN, ESIC, and PAN information.
          </p>

          {/* Bank Accounts */}
          <div className="mb-3">
            {/* Example bank account */}
            <div className="card shadow-sm mb-2 p-3" style={{
              borderRadius: '10px', backgroundColor: '#f5f5f5', borderColor: "#17c666 "
            }}>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">UNA Number</span>
                <span className="fw-semibold">{user?.financialDetails.uanNo || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">ESIC Number</span>
                <span className="fw-semibold">{user?.financialDetails.esicNo || "John Doe"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">PAN Number</span>
                <span className="fw-semibold">{user?.financialDetails.panNumber || "John Doe"}</span>
              </div>
            </div>
          </div>
        </div >

      </div >








      <hr className="mt-2" />
      {/* {billingHistoryshow && <BillingHistory history={billingHistory} />} */}
    </>
  );
};

export default TabBillingContent;

const SubscriptionPlan = ({
  planName,
  description,
  price,
  billingCycle,
  nextPayment,
  onCancel,
  onUpdate,
}) => {
  return (
    <div className="p-4 mb-4 d-xxl-flex d-xl-block d-md-flex align-items-center justify-content-between gap-4 border border-dashed border-gray-5 rounded-1">
      <div>
        <div className="fs-14 fw-bold text-dark mb-1">
          Your current plan is{" "}
          <a href="#" className="badge bg-primary text-white ms-2">
            {planName}
          </a>
        </div>
        <div className="fs-12 text-muted">{description}</div>
      </div>
      <div className="my-3 my-xxl-0 my-md-3 my-md-0">
        <div className="fs-20 text-dark">
          <span className="fw-bold">{price}</span> /{" "}
          <em className="fs-11 fw-medium">{billingCycle}</em>
        </div>
        <div className="fs-12 text-muted mt-1">
          Billed Monthly / Next payment on {nextPayment} for{" "}
          <strong className="text-dark">$62.48</strong>
        </div>
      </div>
      <div className="hstack gap-3">
        <a href="#" className="text-danger" onClick={onCancel}>
          Cancel Plan
        </a>
        <a href="#" className="btn btn-light-brand" onClick={onUpdate}>
          Update Plan
        </a>
      </div>
    </div>
  );
};

const SubscriptionCard = ({ planName, description, details, price, billingCycle, isActive }) => {
  return (
    <div className="col-xxl-4 col-xl-12 col-lg-4">
      <a
        href="#"
        className={`p-4 mb-4 d-block ${isActive ? "bg-soft-200" : "bg-soft-100"} border border-dashed border-gray-5 rounded-1 position-relative`}
      >
        <h6 className="fs-13 fw-bold">{planName}</h6>
        <p className="fs-12 fw-normal text-muted">{description}</p>
        <p className="fs-12 fw-normal text-muted text-truncate-2-line">{details}</p>
        <div className="mt-4">
          <span className="fs-16 fw-bold text-dark">{price}</span> /{" "}
          <em className="fs-11 fw-medium">{billingCycle}</em>
        </div>
        {isActive && (
          <div className="position-absolute top-0 start-50 translate-middle">
            <FiCheck size={20} className="bg-primary text-white p-1 rounded-circle" />
          </div>
        )}
      </a>
    </div>
  );
};

const PaymentMethod = ({ isActive, cardType, cardHolder, cardNumber, expiryDate, cardImg }) => {
  return (
    <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1 position-relative">
      <div className="d-sm-flex align-items-center">
        <div className="wd-100">
          <img src={`/images/payment/${cardType}.svg`} className="img-fluid" alt="" />
        </div>
        <div className="ms-0 ms-sm-3">
          <div className="text-dark fw-bold mb-2">{cardHolder}</div>
          <div className="mb-0 text-truncate-1-line">{cardNumber}</div>
          <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">
            Card expires at {expiryDate}
          </small>
        </div>
      </div>
      <div className="hstack gap-3 mt-3 mt-sm-0">
        <a href="#" className="text-danger">
          Delete
        </a>
        <a href="#" className="btn btn-sm btn-light">
          Edit
        </a>
      </div>
      {isActive && (
        <div className="position-absolute top-50 start-0 translate-middle">
          <FiCheck size={20} className="bg-primary text-white p-1 rounded-circle" />
        </div>
      )}
    </div>
  );
};

const BillingHistory = ({ history }) => {
  return (
    <div className="payment-history">
      <div className="mb-4 px-4 d-flex align-items-center justify-content-between">
        <h5 className="fw-bold mb-0">Billing History:</h5>
        <a href="#" className="btn btn-sm btn-light-brand">
          All History
        </a>
      </div>
      <div className="table-responsive">
        <table className="table mb-0">
          <thead>
            <tr className="border-top">
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href="#">{item.id}</a>
                </td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>
                  <span className={`badge bg-soft-${item.statusColor} text-${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="hstack justify-content-end gap-4 text-end">
                  <a href="#" data-toggle="tooltip" data-bs-trigger="hover" data-title="Sent Mail">
                    <FiSend className="fs-12" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-title="Invoice Details"
                  >
                    <FiEye className="fs-12" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-title="More Options"
                  >
                    <FiMoreVertical className="fs-12" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


const SectionTitle = ({ sectionName, sectionDescription }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="me-4">
        <h2 className="fs-16 fw-bold mb-1">{sectionName}</h2>
        <div className="fs-12 text-muted text-truncate-1-line">{sectionDescription}</div>
      </div>
      <a href="#" className="btn btn-sm btn-light-brand">
        View More
      </a>
    </div>
  );
};


const SimpleFileCard = ({ imgSrc, title }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card border rounded-3 text-center p-3 h-100 shadow-sm">
        <div
          className="d-flex align-items-center justify-content-center mb-3"
          style={{ height: "80px" }}
        >
          <img
            src={imgSrc}
            alt={title}
            style={{ maxHeight: "60px" }}
          />
        </div>
        <h6 className="mb-0 fw-semibold">{title}</h6>
      </div>
    </div>
  );
};