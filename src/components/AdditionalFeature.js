import React from "react";
import { connect, useDispatch } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => dispatch(addFeature(props.feature))}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
