import { Box, Button } from "@mui/material";
import { useState } from "react";

function ImageInput({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, file: File) => void;
}) {
  const [image, setImage] = useState<File | undefined>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : undefined;
    console.log("hello");

    if (file) {
      setImage(file);
      handleChange(event, file);
    }
  };

  return (
    <Box>
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          style={{
            maxHeight: "20vh",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
      ) : (
        <Button variant="contained" component="label" sx={{ marginBottom: 1 }}>
          Add Image
          <input
            accept="image/*"
            type="file"
            hidden
            onChange={handleImageChange}
          />
        </Button>
      )}
    </Box>
  );
}

export default ImageInput;
