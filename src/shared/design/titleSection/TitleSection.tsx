import React from "react";

interface TitleSectionProp {
  title: string;
  icon?: string;
}

const TitleSection: React.FC<TitleSectionProp> = ({
  title = "titolo default",
  icon = "fa fa-address-card",
  children,
}) => {
  return (
    <p className="text-divider text-dark">
      <span>
        <i className={icon} />
        {" " + title}
      </span>
    </p>
  );
};

export default TitleSection;
