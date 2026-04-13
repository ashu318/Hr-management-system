import React from "react";

const SidebarSkeleton = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between px-3 py-3"
      style={{
        minHeight: "70vh", // ✅ main requirement
      }}
    >
      {/* Top Section (Menu Items) */}
      <div>
        {/* Title */}
        <div
          className="bg-light mb-4"
          style={{ height: "14px", width: "100px", borderRadius: "4px" }}
        />

        {/* Menu Items */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="d-flex align-items-center gap-3 mb-3">
            {/* Icon */}
            <div
              className="bg-light"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "6px",
              }}
            />

            {/* Text */}
            <div
              className="bg-light"
              style={{
                height: "12px",
                width: `${80 + Math.random() * 40}px`,
                borderRadius: "4px",
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom Card Skeleton */}
      <div>
        <div className="bg-light mb-2" style={{ height: "60px", borderRadius: "8px" }} />
        <div className="bg-light" style={{ height: "35px", borderRadius: "6px" }} />
      </div>
    </div>
  );
};

export default SidebarSkeleton;
