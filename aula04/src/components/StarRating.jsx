import { useState } from "react";
import Star from "./Star.jsx";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  onSetRating,
  userRating
}) => {
  StarRating.propTypes = {
    maxRating: PropTypes.number,
    color: PropTypes.number,
    size: PropTypes.number,
    onSetRating: PropTypes.func,
  };
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textSTyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
            onSetRating={onSetRating}
          />
        ))}
      </div>
      <p style={textSTyle}>{tempRating || rating || ""}</p>
    </div>
  );
};
export default StarRating;
