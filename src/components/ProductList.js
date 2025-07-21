import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/api";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.description}</Typography>
              <Typography>₹{product.price}</Typography>
              <Button onClick={() => navigate(`/product/${product.id}`)}>
                View
              </Button>
              <Button onClick={() => navigate(`/edit-product/${product.id}`)}>
                Edit
              </Button>
              <Button color="error" onClick={() => handleDelete(product.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
