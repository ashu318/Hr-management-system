import Skeleton from "react-loading-skeleton";

const LeaveTableSkeleton = ({ rows = 6 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index}>
          {/* Employee */}
          <td>
            <div className="hstack gap-3">
              <Skeleton circle width={40} height={40} />
              <div>
                <Skeleton width={120} height={14} />
                <Skeleton width={160} height={12} className="mt-1" />
              </div>
            </div>
          </td>

          {/* Leave Type */}
          <td>
            <Skeleton width={100} height={22} borderRadius={8} />
          </td>

          {/* Start Date */}
          <td>
            <Skeleton width={90} height={14} />
          </td>

          {/* End Date */}
          <td>
            <Skeleton width={90} height={14} />
          </td>

          {/* Status */}
          <td>
            <Skeleton width={80} height={22} borderRadius={999} />
          </td>

          {/* Created At */}
          <td>
            <Skeleton width={90} height={14} />
          </td>

          {/* Actions */}
          <td>
            <div className="hstack gap-2 justify-content-end">
              <Skeleton circle width={36} height={36} />
              <Skeleton circle width={36} height={36} />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default LeaveTableSkeleton;
