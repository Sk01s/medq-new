import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import firebaseInstance from "@/lib/firebase";
import { toast } from "react-toastify";

function EmailModal({ open, onClose }) {
  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    try {
      const res = await firebaseInstance.sendEmail(email);
      toast.success("The email had been sent ! Check your email.");
    } catch (error) {
      toast.error("Error happend while sending ");
    }
    // Add your logic to send the email here
    // You can use the 'email' state to get the email address
    // Close the modal after sending the email
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "white",
          p: "2rem",
          outline: "none",
          textAlign: "center",
          borderRadius: "1rem",
        }}
      >
        <h4>Enter Your Email</h4>
        <br />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleSendEmail}>
          Send
        </Button>
      </Box>
    </Modal>
  );
}

export default EmailModal;
