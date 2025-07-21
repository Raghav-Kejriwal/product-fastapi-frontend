import { useState, useEffect } from "react";
import { createProduct, getProduct, updateProduct } from "../api/api";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = ({ edit }) => {
  const [form, setForm] = useState({ name: "", description: "", price: 0 });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (edit && id) {
      getProduct(id).then((res) => setForm(res.data));
    }
  }, [edit, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      await updateProduct(id, form);
    } else {
      await createProduct(form);
    }
    navigate("/");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        label="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <TextField
        label="Price"
        type="number"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: parseFloat(e.target.value) })
        }
      />
      <Button type="submit" variant="contained">
        {edit ? "Update" : "Add"} Product
      </Button>
    </Box>
  );
};

export default ProductForm;
