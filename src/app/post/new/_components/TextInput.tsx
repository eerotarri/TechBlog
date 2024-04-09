import { TextBlockProps } from "@/models/Props";
import TextField from "@mui/material/TextField";

export default function TextInput({
  name,
  handleChange,
  content,
}: {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: TextBlockProps;
}) {
  return (
    <TextField
      name={name}
      label={content.blockType + " Block"}
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
