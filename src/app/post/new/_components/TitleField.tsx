import { TextField } from "@mui/material";

function TitleField({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextField
      key={-1}
      name="title"
      label="Title"
      onChange={handleChange}
      variant="outlined"
      fullWidth
      style={{
        backgroundColor: "aliceblue",
        marginBottom: "10px",
        borderRadius: "4px",
      }}
    />
  );
}

export default TitleField;
