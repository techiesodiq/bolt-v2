import { Paper, Stack, styled } from "@mui/material";

const NumberDisplay = ({ number }) => {
  const digits = Array.from(String(number), Number);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#F9FAFB",
    ...theme.typography.body2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "103px",
    height: "118px",
    color: theme.palette.primary.main,
    border: "0.3px solid #013EBD",
    borderRadius: "8px",
    boxShadow: "10px 0px 10px rgba(206, 206, 206, 0.25)",
    fontSize: "64px",
    fontWeight: "600",
    lineHeight: "48px",
  }));

  return (
    <Stack direction="row" spacing={2}>
      {digits.map((digit, index) => (
        <Item key={index}>{digit}</Item>
      ))}
    </Stack>
  );
};

export default NumberDisplay;
