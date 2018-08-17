import React from "react";

const Icon = ({ name }) => {
  return (
    <div className="icon">
      {(name in SVG_ICON_PATHS)
      ? <svg viewBox="0 0 30 30">
          <path d={SVG_ICON_PATHS[name]} />
        </svg>
      : <i className={`fa fa-${name}`}></i>}
    </div>
  )
}

export default Icon;

const SVG_ICON_PATHS = {
  "export": `M 2,19 L 2,24 L 28,24 L 28,19
             M 15,2 L 15,15
             M 10,11.5 L 15,17 L 20,11.5`
}
