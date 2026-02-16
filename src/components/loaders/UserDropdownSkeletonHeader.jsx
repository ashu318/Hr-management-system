import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserDropdownSkeletonHeader = () => {
  return (
    <div className="dropdown nxl-h-item">
      <div>
        {/* Top Avatar */}
        <Skeleton circle width={40} height={40} />
      </div>

      <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown show p-3">
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <Skeleton circle width={40} height={40} />

          <div className="ms-2 w-100">
            <Skeleton width="70%" height={14} className="mb-2" />
            <Skeleton width="90%" height={12} />
          </div>
        </div>

        <Skeleton height={35} className="mb-2" />
        <Skeleton height={35} className="mb-2" />
        <Skeleton height={35} className="mb-2" />
        <Skeleton height={35} className="mb-2" />
        <Skeleton height={35} className="mb-2" />
        <Skeleton height={35} />
      </div>
    </div>
  );
};

export default UserDropdownSkeletonHeader;
