"use client";

import { Button, Container, Paper, TextField } from "@mui/material";
import { useState } from "react";

function RegisterPage() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  };

  return (
    <Container maxWidth={"sm"}>
      <form>
        <Paper>
          <TextField
            fullWidth
            name="username"
            variant="outlined"
            label="Username"
            onChange={handleChange}
          ></TextField>
        </Paper>
        <Paper>
          <TextField
            fullWidth
            name="password"
            variant="filled"
            type="password"
            label="Password"
            onChange={handleChange}
          ></TextField>
        </Paper>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default RegisterPage;
