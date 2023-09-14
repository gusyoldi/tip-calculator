import { useState } from "react";

export const SelectPercentage = ({ children, percentage, onSelect }) => {
  function handleSelected(e) {
    onSelect(Number(e.target.value));
  }

  return (
    <div>
      <span>{children}</span>
      <select value={percentage} onChange={handleSelected}>
        <option value={0}>Unsatisfecho (0%)</option>
        <option value={0.05}>Estuvo bien (5%)</option>
        <option value={0.1}>Estuvo muy bien (10%)</option>
        <option value={0.2}>Exelente! (20%)</option>
      </select>
    </div>
  );
};
