import React from "react";
import ContentLoader from "react-content-loader";

const Sckeleton = (props) => (
  <ContentLoader
    className="pets-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#d6d3d3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="280" height="260" /> 
    <rect x="0" y="267" rx="10" ry="10" width="280" height="25" /> 
    <rect x="0" y="310" rx="10" ry="10" width="280" height="90" /> 
    <rect x="0" y="420" rx="10" ry="10" width="91" height="35" /> 
    <rect x="132" y="415" rx="10" ry="10" width="148" height="45" />
  </ContentLoader>
)

export default Sckeleton;

