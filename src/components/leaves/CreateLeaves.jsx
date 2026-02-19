"use client";
import React, { useState } from "react";
import SelectDropdown from "@/components/shared/SelectDropdown";
import { currencyOptionsData } from "@/utils/fackData/currencyOptionsData";
import { FiCamera, FiInfo } from "react-icons/fi";
import { BsCreditCardFill, BsPaypal } from "react-icons/bs";
import { useEffect } from "react";
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa6";
import DatePicker from "react-datepicker";
import useDatePicker from "@/hooks/useDatePicker";
import useImageUpload from "@/hooks/useImageUpload";
import topTost from "@/utils/topTost";
// import { invoiceTempletOptions } from './InvoiceView'
import Dropdown from "@/components/shared/Dropdown";
import toast from "react-hot-toast";
import { leaveTypeOptions } from "@/utils/options";
import { User, Send, Loader2, Info } from "lucide-react";
import LeaveSidebar from "@/components/leaves/LeaveSidebar";
import { marketingCampaignChartOptions } from "@/utils/chartsLogic/marketingCampaignChartOptions";
import { useUserStore } from "@/store/useUserStore";

const previtems = [
  {
    id: 1,
    product: "",
    qty: 0,
    price: 0,
  },
];
const CreateLeaves = () => {
  const { startDate, endDate, setStartDate, setEndDate, renderFooter } = useDatePicker();
  const { handleImageUpload, uploadedImage } = useImageUpload();
  const [selectedOption, setSelectedOption] = useState(null);
  const [items, setItems] = useState(previtems);
  const { fetchUser, user, loading } = useUserStore();

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      product: "",
      qty: 1,
      price: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = () => {
    items.pop();

    setItems(items);
  };

  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === "qty" || field === "price") {
          updatedItem.total = updatedItem.qty * updatedItem.price;
        }
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const subTotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.qty;
  }, 0);

  const vat = (subTotal * 0.1).toFixed(2);
  const vatNumber = Number(vat);
  const total = Number(subTotal + vatNumber).toFixed(2);






  // Leaves posting Logic
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
      // 🔍 Frontend validation (instant UX)
      if (!formData.leaveType || !formData.startDate || !formData.endDate || !formData.reason) {
        toast.error("Please fill all required fields");
        return;
      }

      setIsLoading(true);

      const response = await fetch("/api/leaves/myleaves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔐 send auth_token cookie
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // ❌ Backend validation error
        toast.error(data.message || "Failed to apply leave");
        return;
      }

      // ✅ Success
      toast.success("Leave applied successfully!");

      // Optional: reset form
      setFormData({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  // Leaves posting Logic



  // Handle cancel
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? All entered data will be lost.")) {
      setFormData({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
      toast.success("Leave cancelled successfully!");
    }
  };



  // fetch users logic
  useEffect(() => {
    fetchUser();
  }, []);
  // fetch users logic

  return (
    <>
      <div className="col-xl-8">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

          {/* Header */}
          <div className="card-header bg-white border-0 py-3">
            <h5 className="mb-0 fw-semibold">Apply Leave</h5>
          </div>

          <div className="card-body">

            {/* ===================== */}
            {/* Employee Info Section */}
            {/* ===================== */}
            <div className="d-flex align-items-center flex-wrap gap-4 pb-4 border-0">

              {/* Avatar */}
              <div className="position-relative">
                <div
                  className="rounded-circle overflow-hidden border border-3 border-primary shadow-sm"
                  style={{ width: "90px", height: "90px" }}
                >
                  <img
                    src={user?.profileImageUrl || "https://via.placeholder.com/150"}
                    alt="Employee"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Online Indicator */}
                <span
                  className="position-absolute start-100 translate-middle p-1 bg-success border border-2 border-white rounded-circle"
                  style={{ top: "67px" }}
                ></span>


              </div>

              {/* Details */}
              <div>
                <h5 className="fw-bold mb-1"> {user?.fullName || "John Doe"}</h5>
                <p className="text-muted mb-2 small">{user?.designation || "Developer"}</p>

                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  <User size={13} className="me-1 text-primary" />
                  {user?.employeeId || "ctsl_0001"}
                </span>
              </div>

            </div>

            {/* ===================== */}
            {/* Date Section */}
            {/* ===================== */}
            <div className="row g-4 pt-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold small">
                  Start Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  className="form-control rounded-3"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold small">
                  End Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="endDate"
                  className="form-control rounded-3"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ===================== */}
            {/* Leave Details */}
            {/* ===================== */}
            <div className="row g-4 pt-4">

              <div className="col-lg-4">
                <label className="form-label fw-semibold small">
                  Leave Type <span className="text-danger">*</span>
                </label>
                <SelectDropdown
                  options={leaveTypeOptions}
                  selectedOption={selectedLeaveType}
                  defaultSelect="Select Leave Type"
                  onSelectOption={(option) => {
                    setSelectedLeaveType(option);
                    setFormData((prev) => ({
                      ...prev,
                      leaveType: option.value,
                    }));
                  }}
                />
              </div>

              <div className="col-lg-8">
                <label className="form-label fw-semibold small">
                  Reason <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="Enter leave reason"
                  value={formData.reason}
                  name="reason"
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* ===================== */}
            {/* Action Button */}
            {/* ===================== */}
            <div className="d-flex justify-content-end gap-3 pt-4">

              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={{ minWidth: "150px", height: "44px" }}
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </button>

              <button
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                style={{ minWidth: "150px", height: "44px" }}
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Request
                  </>
                )}
              </button>

            </div>


            {/* <div className="d-flex align-items-center justify-content-end gap-3">
              <button
                className="btn btn-light px-4"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary px-4 d-inline-flex align-items-center gap-2"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Request
                  </>
                )}
              </button>
            </div> */}

          </div>



        </div>

        {/* Leave Policy Info */}
        <div className="mt-4">
          <div className="alert alert-info bg-opacity-10 border-0">
            <div className="d-flex gap-3">
              <Info size={20} className="text-info flex-shrink-0 mt-1" />
              <div>
                <h6 className="fw-semibold mb-2">Leave Policy Guidelines</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <ul className="small mb-0 ps-3">
                      <li className="mb-2">Submit leave requests 48 hours in advance for planned leaves</li>
                      <li className="mb-2">Emergency leaves require notification before 9:00 AM</li>
                      <li className="mb-2">Early leaves (max 2 hours) count as half-day leave</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="small mb-0 ps-3">
                      <li className="mb-2">Medical leave &gt; 3 days requires doctor's note</li>
                      <li className="mb-2">Ensure work handover before leave</li>
                      <li className="mb-2">Set out-of-office email</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeaveSidebar />
    </>
  );

};

export default CreateLeaves;











