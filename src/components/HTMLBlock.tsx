import TextField from "@mui/material/TextField";

function HTMLBlock({
  name,
  handleChange,
  content,
}: {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: string;
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
