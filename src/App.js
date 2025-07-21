import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import SellerForm from "./components/SellerForm";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/add-product">
            Add Product
          </Button>
          <Button color="inherit" component={Link} to="/add-seller">
            Add Seller
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/edit-product/:id" element={<ProductForm edit />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add-seller" element={<SellerForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
