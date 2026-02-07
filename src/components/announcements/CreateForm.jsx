"use client";
import React, { useState } from "react";
import SelectDropdown from "@/components/shared/SelectDropdown";
import MultiSelectTags from "@/components/shared/MultiSelectTags";
import MultiSelectImg from "@/components/shared/MultiSelectImg";
import DatePicker from "react-datepicker";
import useDatePicker from "@/hooks/useDatePicker";
import {
    propasalLeadOptions,
    propsalDiscountOptions,
    propsalRelatedOptions,
    propsalStatusOptions,
    propsalVisibilityOptions,
    taskAssigneeOptions,
    taskLabelsOptions,
} from "@/utils/options";
import { timezonesData } from "@/utils/fackData/timeZonesData";
import { currencyOptionsData } from "@/utils/fackData/currencyOptionsData";
import useLocationData from "@/hooks/useLocationData";
import Loading from "@/components/shared/Loading";
import AddProposal from "@/components/proposalEditCreate/AddProposal";

const previtems = [
    {
        id: 1,
        product: "",
        qty: 0,
        price: 0,
    },
];
const CreateForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { startDate, endDate, setStartDate, setEndDate, renderFooter } = useDatePicker();
    const { countries, states, cities, error, fetchStates, fetchCities } = useLocationData();




    // function to send the email
    const [subject, setSubject] = useState('')
    const [mailBody, setMailBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    const handleSend = async () => {
        if (!subject || !mailBody) {
            setMessage({ type: 'error', text: 'Subject and message are required' })
            return
        }

        try {
            setLoading(true)
            setMessage(null)

            const res = await fetch('/api/announcements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // 🔐 cookie auth
                body: JSON.stringify({
                    subject,
                    mailBody, // 👈 backend expects this key
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Failed to send email')
            }

            setMessage({
                type: 'success',
                text: `Email sent successfully to ${data.totalRecipients} employees`,
            })

            setSubject('')
            setMailBody('')
        } catch (err) {
            setMessage({
                type: 'error',
                text: err.message || 'Something went wrong',
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading ? <Loading /> : ""}

            <div className="col-xl-12" >
                <div className="card stretch stretch-full">
                    <div className="card-body">
                        <div className="mb-2">
                            <label className="form-label">
                                Subject <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Subject" defaultValue="" />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Related <span className="text-danger">*</span>
                            </label>
                            <SelectDropdown
                                options={propsalRelatedOptions}
                                selectedOption={selectedOption}
                                defaultSelect="lead"
                                onSelectOption={(option) => setSelectedOption(option)}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Assignee:</label>
                            <MultiSelectImg options={taskAssigneeOptions} placeholder={""} />
                        </div>
                        <div className="mb-2">
                            <textarea
                                className="form-control"
                                rows={3}
                                value={mailBody}
                                onChange={(e) => setMailBody(e.target.value)}
                                placeholder="Write announcement message..."
                            />
                        </div>
                        <div className="mb-2">
                            <button
                                className="btn btn-primary"
                                onClick={handleSend}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Bulk Email'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateForm;
