import { useEffect, useState } from "react";
import { getProduct } from "../api/api";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4">{product.name}</Typography>
      <Typography>{product.description}</Typography>
      <Typography variant="h6">₹{product.price}</Typography>
    </Box>
  );
};

export default ProductDetail;
