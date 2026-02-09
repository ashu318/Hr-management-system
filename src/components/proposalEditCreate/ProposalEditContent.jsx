"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import SelectDropdown from "@/components/shared/SelectDropdown";
import MultiSelectImg from "@/components/shared/MultiSelectImg";
import MultiSelectTags from "@/components/shared/MultiSelectTags";
import Loading from "@/components/shared/Loading";
import AddProposal from "./AddProposal";
import { currencyOptionsData } from "@/utils/fackData/currencyOptionsData";
import useDatePicker from "@/hooks/useDatePicker";
import { addDays } from "date-fns";
import { timezonesData } from "@/utils/fackData/timeZonesData";
import {
  propasalLeadOptions,
  propsalDiscountOptions,
  propsalRelatedOptions,
  propsalStatusOptions,
  propsalVisibilityOptions,
  taskAssigneeOptions,
  taskLabelsOptions,
} from "@/utils/options";
import useLocationData from "@/hooks/useLocationData";
import toast from "react-hot-toast";

const previtems = [
  {
    id: 1,
    product: "Website design and development",
    qty: 1,
    price: 250,
  },
  {
    id: 2,
    product: "Search engine optimization (SEO) optimization",
    qty: 2,
    price: 300,
  },
];

const ProposalEditContent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { startDate, endDate, setStartDate, setEndDate, renderFooter } = useDatePicker();
  const { countries, states, cities, loading, error, fetchStates, fetchCities } = useLocationData();
  const [loadings, setLoadings] = useState(false);

  useEffect(() => {
    setStartDate(new Date());
    setEndDate(addDays(new Date(), 2));
  }, []);

  // form submission login
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    employmentType: "",
    workLocation: "",
    dateOfJoining: "",

    // Personal Details
    gender: "",
    dateOfBirth: "",
    fatherName: "",
    motherName: "",

    // Address Details
    currentAddress: "",
    permanentAddress: "",
    city: "",
    state: "",
    country: "",
    pincode: "",

    //  Emergency Contact
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",

    // Reporting Manager
    reportingManagerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadings(true);

    try {
      const res = await fetch("/api/users/all-users-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json(); // 👈 VERY IMPORTANT
      if (!res.ok) {
        toast.error(result.message || "Something went wrong");
        return;
      }

      if (res.ok) {
        toast.success(result.message || "User created successfully");
        setFormData({
          name: "",
          employeeId: "",
          email: "",
          phone: "",
          designation: "",
          dateOfJoining: "",
        }); // Reset form
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoadings(false);
    }
  };
  // form submission login

  return (
    <>
      <div className="col-xl-12">
        <div className="card stretch stretch-full">
          <div className="card-body">
            <h5 className="mb-4"> Employee Details</h5>

            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Employee Details */}
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Employee Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="EMP-001"
                      name="employeeId"
                      value={formData.employeeId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john.doe@company.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9876543210"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Software Engineer"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Technical Team"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Employment Type <span className="text-danger">*</span>
                    </label>
                    <select
                      type="text"
                      className="form-select"
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                    >
                      <option value="FULL_TIME">Full Time</option>
                      <option value="PART_TIME">Part Time</option>
                      <option value="CONTRACT">Contract</option>
                      <option value="INTERN">Intern</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Work Location <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bhubaneshwar"
                      name="workLocation"
                      value={formData.workLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Date of Joining <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfJoining"
                      value={formData.dateOfJoining}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <h5 className="mb-4">Personal Details</h5>
                {/* Personal Details */}
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
                      type="text"
                      className="form-select"
                      name="gender"
                      value={formData.gender || ""} // default to empty string
                      onChange={handleChange}
                      required
                    >
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Date of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Fathers Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Mothers Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Johni Doeini"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <h5 className="mb-4">Address Details</h5>
                {/* Address Details */}
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Current Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bhubaneshwar"
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Permanent Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bhubaneshwar"
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bhubaneshwar"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Odisha"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="India"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Pincode <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123456"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <h5 className="mb-4">Emergency Details</h5>
                {/* Emergency Contact */}
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Emergency Contact Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Emergency Contact Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234567890"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  {" "}
                  <div className="mb-4">
                    <label className="form-label">
                      Emergency Contact Relationship <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Family"
                      name="emergencyContactRelation"
                      value={formData.emergencyContactRelation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <h5 className="mb-4">Reporting Details</h5>
                {/* Reporting Manager */}
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      Reporting Manager <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="reportingManagerName"
                      value={formData.reportingManagerName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary" disabled={loadings}>
                  {loadings ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      />
                      Saving...
                    </>
                  ) : (
                    "Save Employee"
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  disabled={loadings}
                  onClick={() =>
                    setFormData({
                      name: "",
                      employeeId: "",
                      email: "",
                      phone: "",
                      designation: "",
                      dateOfJoining: "",
                    })
                  }
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <AddProposal previtems={previtems} /> */}
    </>
  );
};

export default ProposalEditContent;
