import React from "react";
import classes from "../../styles/skill-item.module.css";

const SkillItem = ({title, icon}) => {
  return (
    <div className={`${classes.skill__item}`}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default SkillItem;
