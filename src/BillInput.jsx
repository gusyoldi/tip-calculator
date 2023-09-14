export const BillInput = ({ onChangeBill, bill }) => {
  function handleBill(e) {
    // if (typeof bill === "number") return;
    onChangeBill(Number(e.target.value));
  }

  return (
    <>
      <span>Cuánto fue la cuenta?</span>
      <input
        type="text"
        placeholder="Monto de la cuenta"
        value={bill}
        onChange={handleBill}
      />
    </>
  );
};
