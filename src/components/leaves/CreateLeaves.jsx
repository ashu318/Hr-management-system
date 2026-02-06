"use client";
import React, { useState } from "react";
import SelectDropdown from "@/components/shared/SelectDropdown";
import { currencyOptionsData } from "@/utils/fackData/currencyOptionsData";
import { FiCamera, FiInfo } from "react-icons/fi";
import { BsCreditCardFill, BsPaypal } from "react-icons/bs";
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
import { User, Send, Loader2 } from "lucide-react";
import LeaveSidebar from "@/components/leaves/LeaveSidebar";

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

  return (
    <>
      <div className="col-xl-8">
        <div className="card invoice-container">
          <div className="card-header">
            <h5>Apply Your Leave</h5>
            <div className="d-flex align-items-center gap-2 fs-14 text-muted">
              <User size={16} className="text-primary" />
              <span>
                Employee:
                <strong className="fw-bold text-dark ms-1">John Doe</strong>
              </span>
            </div>
          </div>

          <div className="card-body p-0">
            {/* Top section */}
            <div className="px-4 pt-4">
              <div className="d-md-flex align-items-center justify-content-between">
                {/* Employee Image */}
                <div className="mb-4 mb-md-0 your-brand">
                  <label className="wd-100 ht-100 mb-0 position-relative overflow-hidden border border-gray-2 rounded">
                    <img
                      src="https://i.pravatar.cc/150"
                      className="img-fluid rounded h-100 w-100"
                      alt="Employee"
                    />
                    <div className="position-absolute start-50 top-50 translate-middle h-100 w-100 d-flex align-items-center justify-content-center c-pointer upload-button">
                      <FiCamera size={16} />
                    </div>
                  </label>
                  <div className="fs-12 text-muted mt-1">
                    <label className="form-label">
                      <span className="text-danger">*</span>
                    </label>{" "}
                    Is this your image?
                  </div>
                </div>

                {/* Dates */}
                <div className="d-md-flex align-items-center justify-content-end gap-4">
                  <div className="form-group mb-3 mb-md-0">
                    <label className="form-label">
                      Start Date
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="form-control"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      End Date
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      className="form-control"
                      value={formData.endDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-dashed" />

            {/* Bottom section */}
            <div className="px-4 row g-3">
              {/* Leave Type */}
              <div className="col-xl-4">
                <div className="form-group">
                  <label className="form-label">
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <SelectDropdown
                    options={leaveTypeOptions}
                    selectedOption={selectedLeaveType} // ✅ must be the full object
                    defaultSelect="Select Leave Type"
                    onSelectOption={(option) => {
                      setSelectedLeaveType(option); // full object
                      setFormData((prev) => ({
                        ...prev,
                        leaveType: option.value, // backend only
                      }));
                    }}
                  />
                </div>
              </div>

              {/* Reason */}
              <div className="col-xl-8">
                <div className="form-group">
                  <label className="form-label">
                    Reason <span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter leave reason"
                    value={formData.reason}
                    name="reason"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="border-dashed" />

            {/* Action */}
            <div className="px-4 pb-4 text-end">
              <button
                className="btn btn-primary d-inline-flex align-items-center gap-2"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Applying...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Apply Leave
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <LeaveSidebar />
    </>
  );
};

export default CreateLeaves;
