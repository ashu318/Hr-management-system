"use client";

import React, { useState } from "react";

const Page = () => {
  const [subject, setSubject] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSend = async () => {
    if (!subject || !mailBody) {
      setMessage({ type: "error", text: "Subject and message are required" });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const res = await fetch("/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔐 cookie auth
        body: JSON.stringify({
          subject,
          mailBody, // 👈 backend expects this key
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      setMessage({
        type: "success",
        text: `Email sent successfully to ${data.totalRecipients} employees`,
      });

      setSubject("");
      setMailBody("");
    } catch (err) {
      setMessage({
        type: "error",
        text: err.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-3">Bulk Email Sender</h4>

          <div className="mb-3">
            <label className="form-label">Email Subject</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Message</label>
            <textarea
              className="form-control"
              rows={6}
              value={mailBody}
              onChange={(e) => setMailBody(e.target.value)}
              placeholder="Write announcement message..."
            />
          </div>

          {message && (
            <div
              className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"}`}
            >
              {message.text}
            </div>
          )}

          <button className="btn btn-primary" onClick={handleSend} disabled={loading}>
            {loading ? "Sending..." : "Send Bulk Email"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
