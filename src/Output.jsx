export const Output = ({ bill, tip }) => {
  return <p>{`Vas a dejar $${bill + tip} ($${!bill ? 0 : bill} + $${tip})`}</p>;
};
