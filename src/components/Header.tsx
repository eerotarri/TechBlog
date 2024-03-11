import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <>
      <Toolbar
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href={`/`}>
          {" "}
          <Typography
            component="h2"
            variant="h2"
            color="inherit"
            align="left"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
        </Link>

        <Button variant="contained" size="small">
          Sign up
        </Button>
      </Toolbar>
    </>
  );
}
