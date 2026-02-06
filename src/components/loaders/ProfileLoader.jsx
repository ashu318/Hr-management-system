import Skeleton from "react-loading-skeleton";

const ProfileDetailsSkeleton = () => {
  return (
    <div className="content-area-body">
      <div className="card mb-0">
        <div className="card-body">
          {/* Profile Header */}
          <div className="mb-5 d-flex align-items-center gap-4">
            <Skeleton circle width={100} height={100} />

            <div>
              <Skeleton width={220} height={20} />
              <Skeleton width={120} height={18} className="mt-2" />
            </div>
          </div>

          <hr />

          {/* General Info Header */}
          <div className="mb-4 d-flex align-items-center justify-content-between border-bottom pb-3">
            <div>
              <Skeleton width={200} height={18} />
              <Skeleton width={260} height={12} className="mt-2" />
            </div>
            <Skeleton width={90} height={32} borderRadius={8} />
          </div>

          {/* Professional Details */}
          <Skeleton width={180} height={16} className="mb-3" />

          {Array.from({ length: 4 }).map((_, i) => (
            <div className="row mb-3" key={i}>
              <div className="col-lg-3">
                <Skeleton width={120} height={14} />
              </div>
              <div className="col-lg-9">
                <Skeleton width="70%" height={14} />
              </div>
            </div>
          ))}

          <hr />

          {/* Contact Details */}
          <Skeleton width={160} height={16} className="mb-3" />

          {Array.from({ length: 2 }).map((_, i) => (
            <div className="row mb-3" key={i}>
              <div className="col-lg-3">
                <Skeleton width={120} height={14} />
              </div>
              <div className="col-lg-9">
                <Skeleton width="60%" height={14} />
              </div>
            </div>
          ))}

          <hr />

          {/* Personal Details */}
          <Skeleton width={160} height={16} className="mb-3" />

          {Array.from({ length: 3 }).map((_, i) => (
            <div className="row mb-3" key={i}>
              <div className="col-lg-3">
                <Skeleton width={120} height={14} />
              </div>
              <div className="col-lg-9">
                <Skeleton width="50%" height={14} />
              </div>
            </div>
          ))}

          <hr />

          {/* Address */}
          <Skeleton width={120} height={16} className="mb-3" />

          {Array.from({ length: 4 }).map((_, i) => (
            <div className="row mb-3" key={i}>
              <div className="col-lg-3">
                <Skeleton width={140} height={14} />
              </div>
              <div className="col-lg-9">
                <Skeleton width="80%" height={14} />
              </div>
            </div>
          ))}

          <hr />

          {/* Emergency */}
          <Skeleton width={170} height={16} className="mb-3" />

          {Array.from({ length: 2 }).map((_, i) => (
            <div className="row mb-3" key={i}>
              <div className="col-lg-3">
                <Skeleton width={140} height={14} />
              </div>
              <div className="col-lg-9">
                <Skeleton width="60%" height={14} />
              </div>
            </div>
          ))}

          <hr />

          {/* Organization */}
          <Skeleton width={150} height={16} className="mb-3" />

          <div className="row">
            <div className="col-lg-3">
              <Skeleton width={160} height={14} />
            </div>
            <div className="col-lg-9">
              <Skeleton width={220} height={14} />
              <Skeleton width={260} height={12} className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsSkeleton;
