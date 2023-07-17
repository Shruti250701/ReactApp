import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          fontFamily={"sans-serif-bold"}
          fontSize={"30px"}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleUsernameChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={password}
            onChange={handlePasswordChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="theme.spacing(3, 0, 2)"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default Login;
