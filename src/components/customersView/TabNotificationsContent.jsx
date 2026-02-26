"use client";
import React, { useState, useEffect } from "react";
import { FiTrash2, FiEdit, FiEye } from "react-icons/fi";
import { BsPatchCheckFill } from "react-icons/bs";
import toast from "react-hot-toast";

const documentTypesList = [
  "PAN Card",
  "Aadhaar Card",
  "Bank Proof",
  "Offer Letter",
  "Resume",
  "Leaving Letter",
  "Joining Letter",
  "Passport",
  "Visa",
  "Driving License",
  "Experience Certificate",
];

const TabNotificationsContent = ({ employeeId }) => {
  const [showModal, setShowModal] = useState(false);
  const [documentType, setDocumentType] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleUpload = async () => {
    if (!documentType || !file) {
      toast.error("Please select document type and file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("documentType", documentType);
      formData.append("documentName", documentType);
      formData.append("file", file);

      const res = await fetch(
        `/api/users/users-profile/${employeeId}/documents`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Document uploaded successfully ✅");

        // Reset
        setDocumentType("");
        setFile(null);
        setPreview(null);
        await fetchDocuments();
        setShowModal(false);
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  const fetchDocuments = async () => {
    try {
      setFetchLoading(true);

      const res = await fetch(
        `/api/users/users-profile/${employeeId}/documents`
      );

      const data = await res.json();

      if (res.ok) {
        setDocuments(data.documents);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setFetchLoading(false);
    }
  };


  const handleDelete = async (documentId) => {
    if (!confirm("Are you sure you want to delete this document?")) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/users/users-profile/documents/${documentId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Document deleted successfully ");
        // Refresh the document list
        setDocuments((prev) => prev.filter((doc) => doc.id !== documentId));
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while deleting the document");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (employeeId) {
      fetchDocuments();
    }
  }, [employeeId]);


  return (
    <div className="tab-pane fade" id="notificationsTab" role="tabpanel">

      {/* Upload Header */}
      <div className="mb-2 mt-4 d-flex align-items-center justify-content-between px-4">
        <h5 className="fw-bold mb-0">Documents </h5>

        <button
          type="button"
          className="btn btn-sm btn-light-brand"
          onClick={() => setShowModal(true)}
        >
          + Upload Document
        </button>
      </div>



      {/* Modal */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div className="modal-backdrop show"></div>

          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-4 border-0 shadow p-4">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-semibold mb-0">
                    Upload Document
                  </h6>
                  <button
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                {/* Document Type */}
                <div className="mb-3">
                  <label className="form-label small text-muted">
                    Document Type
                  </label>
                  <select
                    className="form-select"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                  >
                    <option value="">Select Document Type</option>
                    {documentTypesList.map((type) => (
                      <option key={type} value={type}>
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
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={(e) => {
                      const selected = e.target.files[0];

                      if (!selected) return;

                      const allowedTypes = [
                        "image/jpeg",
                        "image/jpg",
                        "image/png",
                        "image/webp",
                      ];

                      if (!allowedTypes.includes(selected.type)) {
                        alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
                        e.target.value = null;
                        return;
                      }

                      setFile(selected);
                      setPreview(URL.createObjectURL(selected));
                    }}
                  />
                </div>

                {/* Preview */}
                {preview && (
                  <div className="text-center mb-3">
                    {file?.type === "application/pdf" ? (
                      <img
                        src="/icons/pdf.png"
                        alt="pdf"
                        style={{ height: "80px" }}
                      />
                    ) : (
                      <img
                        src={preview}
                        alt="preview"
                        className="img-fluid rounded-3"
                        style={{
                          maxHeight: "150px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>
                )}

                {/* Upload Button */}
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
        </>
      )}

      <hr />

      <div className="px-4 mt-3">
        {fetchLoading ? (
          <p className="text-muted">Loading documents...</p>
        ) : documents.length === 0 ? (
          <p className="text-muted">No documents uploaded.</p>
        ) : (
          <div className="row">
            {documents.map((doc) => (
              <div key={doc.id} className="col-md-4 col-sm-6 mb-4">
                <div
                  className="card border-0 shadow-sm h-80 position-relative"
                  style={{
                    borderRadius: "12px",
                    transition: "0.2s ease",
                  }}
                >

                  {/* Verified Badge */}
                  <div
                    className="position-absolute text-success"
                    style={{
                      top: "10px",
                      right: "10px",
                    }}
                  >
                    <BsPatchCheckFill size={18} />
                  </div>

                  {/* Image Container */}
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{
                      height: "100px",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    {doc.fileType === "application/pdf" ? (
                      <img
                        src="/icons/pdf.png"
                        alt="pdf"
                        style={{
                          height: "70px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <img
                        src={doc.fileUrl}
                        alt="document"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-3 text-center flex-grow-1">
                    <h6 className="fw-semibold mb-1 text-truncate">
                      {doc.documentType}
                    </h6>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 p-3 pt-0">
                    <button
                      className="w-50 btn btn-light-brand btn-sm"
                      style={{ borderRadius: "4px" }}
                      onClick={() => handleDelete(doc.id)}
                    >
                      <FiTrash2 size={14} className="me-1" />
                      Delete
                    </button>

                    <button
                      className="w-50 btn btn-primary btn-sm"
                      style={{ borderRadius: "4px" }}
                      onClick={() => setSelectedDoc(doc)}
                    >
                      <FiEye size={14} className="me-1" />
                      View
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedDoc && (
        <>
          <div className="modal-backdrop show"></div>

          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            <div className="modal-dialog modal-md modal-dialog-centered">
              <div
                className="modal-content"
                style={{ borderRadius: "10px" }}
              >

                {/* Header */}
                <div className="modal-header">
                  <h6 className="fw-semibold mb-0">
                    {selectedDoc.documentType}
                  </h6>
                  <button
                    className="btn-close"
                    onClick={() => setSelectedDoc(null)}
                  ></button>
                </div>

                {/* Body */}
                <div
                  className="modal-body text-center"
                  style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                >
                  {selectedDoc.fileUrl?.toLowerCase().includes(".pdf") ? (
                    <iframe
                      src={selectedDoc.fileUrl}
                      width="100%"
                      height="350px"
                      title="PDF Preview"
                      style={{
                        borderRadius: "6px",
                      }}
                    />
                  ) : (
                    <img
                      src={selectedDoc.fileUrl}
                      alt="preview"
                      style={{
                        maxHeight: "350px",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: "6px",
                      }}
                    />
                  )}
                </div>

                {/* Footer */}
                <div className="modal-footer d-flex justify-content-between">

                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => setSelectedDoc(null)}
                    style={{ borderRadius: "4px" }}
                  >
                    Close
                  </button>

                  <a
                    href={selectedDoc.fileUrl.replace(
                      "/upload/",
                      "/upload/fl_attachment/"
                    )}
                    className="btn btn-primary btn-sm"
                    style={{ borderRadius: "4px" }}
                  >
                    Download
                  </a>

                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TabNotificationsContent;