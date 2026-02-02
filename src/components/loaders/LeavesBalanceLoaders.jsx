import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LeavesBalance = ({ rows = 4 }) => {
    return (
        <div className="card-body custom-card-action">
            {Array.from({ length: rows }).map((_, index) => (
                <div
                    key={index}
                    className="hstack justify-content-between border border-dashed rounded-3 p-3 team-card"
                >
                    {/* LEFT SIDE */}
                    <div className="hstack gap-3">
                        {/* Avatar */}
                        <Skeleton
                            circle
                            width={36}
                            height={36}
                        />

                        {/* Text */}
                        <div>
                            <Skeleton width={120} height={14} />
                            <Skeleton width={90} height={11} className="mt-1" />
                        </div>
                    </div>

                    {/* RIGHT SIDE (circle progress placeholder) */}
                    <Skeleton
                        circle
                        width={42}
                        height={42}
                    />
                </div>
            ))}
        </div>
    );
};

export default LeavesBalance ;
