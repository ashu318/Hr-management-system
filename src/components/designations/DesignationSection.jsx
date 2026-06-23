"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

export default function DesignationPage() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch
  const fetchDepartments = async () => {
    const res = await fetch("/api/v1/departments");
    const data = await res.json();
    setDepartments(data.data || []);
  };

  const fetchDesignations = async () => {
    const res = await fetch("/api/v1/designations");
    const data = await res.json();
    setDesignations(data.data || []);
  };

  useEffect(() => {
    fetchDepartments();
    fetchDesignations();
  }, []);

  // Create
  const handleCreate = async () => {
    if (!name || !title || !departmentId) {
      return alert("Fill all fields");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/v1/designations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, title, departmentId }),
      });

      const data = await res.json();

      if (data.success) {
        setName("");
        setTitle("");
        setDepartmentId("");
        fetchDesignations();
      } else {
        const firstError = Object.values(data.errors || {})[0];

        alert(firstError || data.message);

        return;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this designation?")) return;

    try {
      const res = await fetch(`/api/v1/designations/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        fetchDesignations();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container py-4">
      {/* 🔹 Add Designation */}
      <div className="card mb-4 shadow-sm border-0">
        <div className="card-body">
          <h5 className="mb-3 fw-semibold">Add Designation</h5>

          <div className="d-flex gap-2 flex-wrap">
            {/* Department */}
            <select
              className="form-select"
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              style={{ maxWidth: "200px" }}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>

            {/* Name */}
            <input
              type="text"
              className="form-control"
              placeholder="Unique Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ maxWidth: "200px" }}
            />

            {/* Title */}
            <input
              type="text"
              className="form-control"
              placeholder="Display Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ maxWidth: "200px" }}
            />

            <button className="btn btn-primary" onClick={handleCreate} disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Designation List */}
      <div className="row">
        {designations.length === 0 ? (
          <p className="text-muted">No designations found</p>
        ) : (
          designations.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 shadow-sm border-0 hover-shadow position-relative">
                {/* 🗑️ Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center"
                  style={{ zIndex: 1 }}
                >
                  <Trash2 size={16} />
                </button>

                <div className="card-body d-flex flex-column justify-content-between">
                  {/* Title */}
                  <h6 className="fw-bold mb-1 text-body">{item.title}</h6>

                  {/* Name */}
                  <small className="text-muted">{item.name}</small>

                  {/* Footer */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    {/* Department */}
                    <span className="badge bg-primary-subtle text-primary">
                      {item.department?.name || "No Dept"}
                    </span>

                    {/* Status */}
                    <span className="badge bg-success-subtle text-success">Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
