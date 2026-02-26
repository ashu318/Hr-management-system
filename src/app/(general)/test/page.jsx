"use client";
import React, { useState, useEffect } from "react";

const documentTypesList = [
  "PAN Card",
  "Aadhaar Card",
  "Bank Proof",
  "Offer Letter",
  "Experience Certificate",
];

const getFilePreview = (fileUrl) => {
  if (!fileUrl) return "/icons/pdf.png";
  if (fileUrl.toLowerCase().includes(".pdf")) return "/icons/pdf.png";
  return fileUrl;
};

const SimpleFileCard = ({ doc, onPreview }) => {
  const isPdf = doc.fileUrl?.toLowerCase().includes(".pdf");

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div
        className="card border h-100 p-3 position-relative"
        style={{ cursor: "pointer" }}
        onClick={() => onPreview(doc)}
      >
        {/* White Verified Badge */}
        <span
          className="badge border text-dark bg-white position-absolute"
          style={{ top: "10px", right: "10px", fontSize: "11px" }}
        >
          Verified
        </span>

        {/* File Preview */}
        <div
          className="mb-3 bg-light d-flex align-items-center justify-content-center"
          style={{ height: "110px" }}
        >
          <img
            src={isPdf ? "/icons/pdf.png" : doc.fileUrl}
            alt={doc.title}
            style={{
              maxHeight: "90px",
              maxWidth: "100%",
              objectFit: isPdf ? "contain" : "cover",
            }}
          />
        </div>

        {/* Title */}
        <h6 className="fw-semibold text-center mb-1">
          {doc.title}
        </h6>

        {/* Date */}
        {doc.createdAt && (
          <small className="text-muted d-block text-center">
            {new Date(doc.createdAt).toLocaleDateString()}
          </small>
        )}
      </div>
    </div>
  );
};

const PreviewModal = ({ doc, onClose }) => {
  if (!doc) return null;

  const isPdf = doc.fileUrl?.toLowerCase().includes(".pdf");

  return (
    <>
      <div className="modal-backdrop show"></div>

      <div
        className="modal fade show d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold">{doc.title}</h6>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            {isPdf ? (
              <iframe
                src={doc.fileUrl}
                width="100%"
                height="500px"
                title="PDF Preview"
                style={{ borderRadius: "12px" }}
              />
            ) : (
              <img
                src={doc.fileUrl}
                alt="Preview"
                className="img-fluid rounded-3"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const DocumentsPage = ({ employeeId }) => {
  const [documents, setDocuments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [documentType, setDocumentType] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!documentType || !file) {
      alert("Please select document type and file");
      return;
    }

    // ✅ Prevent duplicate upload (Frontend level)
    const alreadyExists = documents.some(
      (doc) => doc.title === documentType
    );

    if (alreadyExists) {
      alert("This document type already uploaded");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("documentType", documentType);
      formData.append("documentName", documentType);
      formData.append("file", file);

      const res = await fetch(
        `/api/users/users-profile/CTSL1366/documents`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        setDocuments((prev) => [
          ...prev,
          {
            title: data.document.documentType,
            fileUrl: data.document.fileUrl,
          },
        ]);

        setShowModal(false);
        setDocumentType("");
        setFile(null);
        setPreview(null);
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch(
          `/api/users/users-profile/CTSL1366/documents`
        );

        const data = await res.json();

        if (res.ok) {
          setDocuments(
            data.documents.map((doc) => ({
              title: doc.documentType,
              fileUrl: doc.fileUrl,
              createdAt: doc.createdAt,
            }))
          );
        }
      } catch (error) {
        console.error("Fetch documents error:", error);
      }
    };

  }, []);
  
  return (
    <div className="subscription-plan px-4 pt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="fw-semibold mb-1">Documents</h5>
          <small className="text-muted">
            Employee uploaded documents
          </small>
        </div>

        <button
          className="btn btn-primary btn-sm rounded-pill px-3"
          onClick={() => setShowModal(true)}
        >
          + Upload
        </button>
      </div>

      {/* Cards */}
      <div className="row">
        {documents.length === 0 ? (
          <p className="text-muted text-center">
            No documents uploaded yet.
          </p>
        ) : (
          documents.map((doc, index) => (
            <SimpleFileCard
              key={index}
              doc={doc}
              onPreview={setPreviewDoc}
            />
          ))
        )}
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 shadow border-0">
              <div className="modal-header border-0">
                <h6 className="fw-semibold mb-0">
                  Upload Document
                </h6>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">

                {/* Dropdown */}
                <div className="mb-3">
                  <label className="form-label small text-muted">
                    Document Type
                  </label>

                  <select
                    className="form-select"
                    value={documentType}
                    onChange={(e) =>
                      setDocumentType(e.target.value)
                    }
                  >
                    <option value="">
                      Select Document Type
                    </option>

                    {documentTypesList.map((type) => (
                      <option
                        key={type}
                        value={type}
                        disabled={documents.some(
                          (doc) => doc.title === type
                        )}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* File Input */}
                <div className="mb-3">
                  <label className="form-label small text-muted">
                    Select File
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => {
                      const selected = e.target.files[0];
                      setFile(selected);

                      if (selected) {
                        setPreview(
                          URL.createObjectURL(selected)
                        );
                      }
                    }}
                  />
                </div>

                {/* Preview */}
                {preview && (
                  <div className="text-center mb-3">
                    <img
                      src={
                        preview.toLowerCase().includes(".pdf")
                          ? "/icons/pdf.png"
                          : preview
                      }
                      alt="preview"
                      className="img-fluid rounded-3"
                      style={{
                        maxHeight: "150px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                <button
                  className="btn btn-primary w-100 rounded-pill"
                  onClick={handleUpload}
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Upload Document"}
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      <PreviewModal
        doc={previewDoc}
        onClose={() => setPreviewDoc(null)}
      />

    </div>
  );
};

export default DocumentsPage;