import React from "react";
import Link from "next/link";
import { FiMoreHorizontal } from "react-icons/fi";

const ImageGroup = ({ data = [], avatarSize = "avatar-sm", avatarMore, avatarStyle, moreUrl, totalRecipients }) => {
  return (
    <>
      {data.map(({ user_name, user_img, id }, index) => (
        <Link
          key={id || index}
          href={moreUrl || "#"}
          className={`avatar-image ${avatarSize}`}
          data-toggle="tooltip"
          data-bs-trigger="hover"
          title={user_name}
        >
          <img src={user_img} className="img-fluid" alt="image" />
        </Link>
      ))}
      <Link
        href={moreUrl || "#"}
        className={`avatar-text ${avatarSize} ${avatarStyle} fs-12 fw-normal`}
        data-toggle="tooltip"
        data-bs-trigger="hover"
        title="Explore More"
      >
        +{totalRecipients}
      </Link>
    </>
  );
};

export default ImageGroup;
