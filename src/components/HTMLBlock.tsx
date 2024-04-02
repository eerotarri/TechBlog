import TextField from "@mui/material/TextField";

function HTMLBlock({
  name,
  handleChange,
}: {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextField
      name={name}
      label="HTML Block"
      onChange={handleChange}
      variant="outlined"
      fullWidth
      multiline
      style={{
        backgroundColor: "aliceblue",
        borderRadius: "4px",
        marginBottom: "10px",
      }}
    ></TextField>
  );
}

export default HTMLBlock;
