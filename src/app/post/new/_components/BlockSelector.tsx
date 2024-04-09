import { FormControl, MenuItem, Select } from "@mui/material";

function BlockSelector({
  blockType,
  setBlockType,
  blockTypes,
}: {
  blockType: string;
  setBlockType: (blockType: string) => void;
  blockTypes: string[];
}): JSX.Element {
  return (
    <FormControl fullWidth>
      <Select
        value={blockType}
        onChange={(e) => setBlockType(e.target.value)}
        children={blockTypes.map((type) => (
          <MenuItem key={type} value={type}>
            Block type: {type.toLocaleUpperCase()}
          </MenuItem>
        ))}
        style={{
          backgroundColor: "aliceblue",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      ></Select>
    </FormControl>
  );
}

export default BlockSelector;
