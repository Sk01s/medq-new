import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  MenuItem,
  Select,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  CircularProgress,
} from "@mui/material";
import firebaseInstance from "@/lib/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function AddressForm({ products }) {
  const clearCart = () => {
    localStorage.setItem("myCart", JSON.stringify([]));
  };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    street: "",
    country: "Select a country",
  });
  const handleCheckout = async () => {
    setLoading(true);
    if (
      !formData.name ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip ||
      !formData.street ||
      formData.country === "Select a country"
    ) {
      setLoading(false);
      setMessage("Check your information");
      return;
    }
    setMessage("");

    try {
      const res = await firebaseInstance.addOrder({
        address: formData,
        products,
        fulfillment: false,
        date: new Date(),
        email: firebaseInstance.auth.currentUser.email,
        userId: firebaseInstance.auth.currentUser.uid,
      });
      setFormData({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        street: "",
        country: "Select a country",
      });
      setTimeout(() => {
        setLoading(false);
        toast.info("Order placed successfully");
        clearCart();
        router.push("/");
      }, 5000);
    } catch (error) {
      setLoading(false);
      toast.error("Error happend !");
      setMessage("Error happend");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const countries = [
    "Select a country",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Japan",
    "China",
    "India",
    "Brazil",
    "South Africa",
    "Mexico",
    "Russia",
    "Argentina",
    "Netherlands",
    "Lebanon",
    "UAE",
    // Add more countries here
  ];

  return (
    <form>
      <h2>Shipping Address</h2>
      <br />
      <Select
        fullWidth
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        {countries.map((country, index) => (
          <MenuItem key={index} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth <= 500 ? "1fr" : "1fr 1fr",
          gap: window.innerWidth <= 500 ? 0 : "1rem",
        }}
      >
        <TextField
          required
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="ZIP Code"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <br />
      <RadioGroup aria-label="Payment" name="Payment">
        <FormControlLabel
          value="COD"
          checked
          control={<Radio />}
          label="Cash On Delivery (COD)"
        />
      </RadioGroup>
      <br />
      <Button
        size="large"
        type="button"
        onClick={handleCheckout}
        variant={loading ? "outlined" : "contained"}
        color="primary"
      >
        Place Your order{" "}
        {loading && (
          <CircularProgress
            color="primary"
            size={"1.2rem"}
            style={{ marginLeft: "1rem" }}
          />
        )}
      </Button>
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "red",
          fontWeight: "700",
        }}
      >
        {message}
      </div>
    </form>
  );
}

export default AddressForm;
