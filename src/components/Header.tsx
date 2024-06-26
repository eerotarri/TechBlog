"use server";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

import { getServerSession } from "next-auth/next";

import { options } from "@auth/options";

interface HeaderProps {
  title: string;
}

export default async function Header({ title }: HeaderProps) {
  const session = await getServerSession(options);

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
        {!session ? (
          <Box>
            <Link href="/api/auth/signin?callbackUrl=/">
              <Button variant="contained" size="small" sx={{ margin: "0 5px" }}>
                Sign in
              </Button>
            </Link>

            <Link href="/register">
              <Button variant="contained" size="small">
                Register
              </Button>
            </Link>
          </Box>
        ) : (
          <Link href="/api/auth/signout?callbackUrl=/">
            <Button variant="contained" size="small" sx={{ margin: "0 5px" }}>
              Sign out
            </Button>
          </Link>
        )}
      </Toolbar>
    </>
  );
}
