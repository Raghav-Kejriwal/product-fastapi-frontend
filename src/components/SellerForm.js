import { useState } from "react";
import { createSeller } from "../api/api";
import { TextField, Button, Box } from "@mui/material";

const SellerForm = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSeller(form);
    alert("Seller registered!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <TextField
        label="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button type="submit" variant="contained">
        Register Seller
      </Button>
    </Box>
  );
};

export default SellerForm;
