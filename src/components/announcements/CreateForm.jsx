"use client";
import React, { useEffect, useState } from "react";
import SelectDropdown from "@/components/shared/SelectDropdown";
import MultiSelectImg from "@/components/shared/MultiSelectImg";
import useDatePicker from "@/hooks/useDatePicker";
import useLocationData from "@/hooks/useLocationData";
import Loading from "@/components/shared/Loading";
import toast from "react-hot-toast";
import { propsalRelatedOptions } from "@/utils/options";
import taskAssigneeOptions from "@/utils/options";
import { useAnnouncementFormStore } from "@/store/useAnnouncementFormStore"

const CreateForm = () => {
  const {
    subject,
    mailBody,
    sendToAll,
    selectedEmail,
    emailOptions,
    loading,
    fetchEmails,
    sendEmail,
    setSubject,
    setMailBody,
    setSendToAll,
    setSelectedEmail,
  } = useAnnouncementFormStore();


  // 📥 Fetch emails from API
  useEffect(() => {
    fetchEmails();
  }, []);




  return (
    <>
      <div className="col-xl-12">
        <div className="card-body">
          <div className="mb-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <label className="form-label mb-0">
                To <span className="text-danger">*</span>
              </label>

              <div className="form-check form-switch form-switch-sm ps-5">
                <input
                  className="form-check-input c-pointer"
                  type="checkbox"
                  id="sendToAllSwitch"
                  checked={sendToAll}
                  onChange={(e) => setSendToAll(e.target.checked)}
                />
                <label
                  className="form-check-label fw-500 text-dark c-pointer"
                  htmlFor="sendToAllSwitch"
                >
                  Send to all users
                </label>
              </div>
            </div>

            {/* Show dropdown ONLY for Individual users */}
            {sendToAll ? (
              <input type="text" className="form-control" value="Sending to all users" disabled />
            ) : (
              <SelectDropdown
                options={emailOptions}
                selectedOption={selectedEmail}
                placeholder="Select user email"
                onSelectOption={setSelectedEmail}
                searchable
              />
            )}
          </div>
          <div className="mb-2">
            <label className="form-label">
              Subject <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Subjects"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">
              Body <span className="text-danger">*</span>
            </label>
            <textarea
              rows={5}
              className="form-control"
              id="InvoiceAddress"
              placeholder="Write email here"
              value={mailBody}
              onChange={(e) => setMailBody(e.target.value)}
            />
          </div>

          <div className="row mb-2">
            <div className="form-check form-switch form-switch-sm ps-5">
              <button className="btn btn-sm btn-primary" onClick={sendEmail} disabled={loading}>
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
