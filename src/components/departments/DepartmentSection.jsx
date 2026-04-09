"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
export default function DepartmentSection() {
    const [name, setName] = useState("");
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch Departments
    const fetchDepartments = async () => {
        try {
            const res = await fetch("/api/departments");
            const data = await res.json();
            setDepartments(data.departments || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    // Create Department
    const handleCreate = async () => {
        if (!name) return alert("Enter department name");

        setLoading(true);

        try {
            const res = await fetch("/api/departments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });

            const data = await res.json();

            if (data.success) {
                setName("");
                fetchDepartments(); // refresh list
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };



    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure you want to delete?");

        if (!confirmDelete) return;

        try {
            const res = await fetch(`/api/departments/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (data.success) {
                fetchDepartments(); // refresh list
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
            alert("Delete failed");
        }
    };


    return (
        <div className="container py-4">

            {/* 🔹 Add Department Section */}
            <div className="card mb-4 shadow-sm border-0">
                <div className="card-body">
                    <h5 className="mb-3 fw-semibold">Add Department</h5>

                    <div className="d-flex gap-2 flex-wrap">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter department name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ maxWidth: "300px" }}
                        />

                        <button
                            className="btn btn-primary"
                            onClick={handleCreate}
                            disabled={loading}
                        >
                            {loading ? "Adding..." : "Add"}
                        </button>
                    </div>
                </div>
            </div>

            {/* 🔹 Department List */}
            <div className="row">
                {departments.length === 0 ? (
                    <p className="text-muted">No departments found</p>
                ) : (
                    departments.map((dept) => (
                        <div
                            key={dept.id}
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
                        >
                            <div className="card h-100 shadow-sm border-0 hover-shadow position-relative">

                                {/* 🗑️ Delete Button (Top Right) */}
                                <button
                                    onClick={() => handleDelete(dept.id)}
                                    className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center "
                                    style={{ zIndex: 1 }}
                                >
                                    <Trash2 size={16} />
                                </button>

                                <div className="card-body d-flex flex-column justify-content-between">

                                    {/* Department Name */}
                                    <h6 className="fw-bold mb-2 text-body">
                                        {dept.name}
                                    </h6>

                                    {/* Footer */}
                                    <div className="d-flex justify-content-between align-items-center mt-3">

                                        {/* ✅ Green Active Badge */}
                                        <span className="badge bg-success-subtle text-success">
                                            Active
                                        </span>

                                        <button className="btn btn-sm btn-outline-primary">
                                            View
                                        </button>
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