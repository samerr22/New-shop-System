import React from "react";

const CompanyLogo = ({
  image,
  link,
  size,
  className,
  imageClassName,
}) => {
  return (
    <a href={link} className={className}>
      <img
        src={image.url}
        alt={image.alt}
        width={`${size === "large" ? "150" : "93"}`}
        height={`${size === "large" ? "50" : "24"}`}
        className={imageClassName}
      />
    </a>
  );
};

export default CompanyLogo;
