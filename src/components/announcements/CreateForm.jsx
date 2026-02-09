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

const CreateForm = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [emailOptions, setEmailOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    const [subject, setSubject] = useState('')
    const [mailBody, setMailBody] = useState('')

    // 1️⃣ Radio / Toggle state (All vs Individual)
    const [sendToAll, setSendToAll] = useState(false);


    // 📥 Fetch emails from API
    useEffect(() => {
        const fetchEmails = async () => {
            try {
                setLoading(true);

                const response = await fetch("/api/users/emails");
                if (!response.ok) throw new Error("Failed to fetch emails");

                const data = await response.json();

                // 🔥 Map API data → SelectDropdown format
                const options = data.emails.map(email => ({
                    value: email,
                    label: email,
                    icon: "feather-mail",
                }));

                setEmailOptions(options);

                // Optional: set first email as default
                if (options.length > 0) {
                    setSelectedOption(options[0]);
                }

            } catch (error) {
                console.error(error);
                toast.error("Failed to load emails");
            } finally {
                setLoading(false);
            }
        };

        fetchEmails();
    }, []);


    const sendEmail = async () => {
        // Validation
        if (!subject.trim() || !mailBody.trim()) {
            toast.error("Subject and message are required");
            return;
        }

        if (!sendToAll && !selectedOption) {
            toast.error("Please select a user email");
            return;
        }

        // ✅ Build payload properly
        const payload = {
            subject: subject.trim(),
            mailBody: mailBody.trim(),
            sendType: sendToAll ? "ALL" : "INDIVIDUAL",
            emails: sendToAll ? [] : [selectedOption.value],
        };

        console.log("Sending payload:", payload);

        try {
            const res = await fetch("/api/announcements", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data?.message || "Failed to send email");
                return;
            }

            toast.success("Email sent successfully");

            // Reset
            setSubject("");
            setMailBody("");
            setSelectedOption(null);
            setSendToAll(false);

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };


    



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
                            <input
                                type="text"
                                className="form-control"
                                value="Sending to all users"
                                disabled
                            />
                        ) : (
                            <SelectDropdown
                                options={emailOptions}
                                selectedOption={selectedOption}
                                placeholder="Select user email"
                                onSelectOption={setSelectedOption}
                                searchable
                            />
                        )}

                    </div>
                    <div className="mb-2">
                        <label className="form-label">
                            Subject <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" placeholder="Subjects"
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
                            <button className="btn btn-sm btn-primary" onClick={sendEmail}>
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
