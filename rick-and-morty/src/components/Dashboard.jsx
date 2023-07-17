import { Stack } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const res = await response.json();
      setData(res.results);
    } catch (error) {
      console.error(error);
    }
  };

  if (data.length === 0) {
    fetchData();
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography component="h1" variant="h5" align="center" fontSize={"30px"}>
        Welcome to Rick-and-Morty
      </Typography>
      <Typography align="center">
        <TextField
          variant="outlined"
          onChange={handleSearch}
          label="Search..."
          value={searchTerm}
        ></TextField>
      </Typography>
      <Typography align="center">
        <Stack>
          {filteredData.map((item) => (
            <Grid item xs={6} md={8}>
              {item.name}
            </Grid>
          ))}
        </Stack>
      </Typography>
    </div>
  );
};

export default Dashboard;
