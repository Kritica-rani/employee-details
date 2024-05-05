import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./styles.css";
import EmployeContext from "../context/EmployeeContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function Header() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    img: "",
  });
  const { handleAddemployee } = useContext(EmployeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  return (
    <div className="head-container">
      <h3>Employee List</h3>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Employee
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={formDetails.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Enter number"
              name="contact"
              value={formDetails.contact}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Img Url"
              name="img"
              value={formDetails.img}
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Enter Dob"
              name="dob"
              value={formDetails.dob}
              onChange={handleChange}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleAddemployee(e, formDetails);
                handleClose();
              }}
            >
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Header;
