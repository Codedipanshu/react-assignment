import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  });

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <LinkButton key={n} n={n} />
      ))}
    </div>
  );
};

const LinkButton = ({ n }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/${n}`)}>{n}</button>
    </div>
  );
};

export default Landing;
