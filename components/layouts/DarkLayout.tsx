import { FC } from "react";

export const DarkLayout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>dark layout</h3><samp></samp>
      <div>{children}</div>
    </div>
  );
};
