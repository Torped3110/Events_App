// Pending.js
import React, { useState } from "react";
import { Button } from "@mantine/core";
import Modal from "./Modal";

function Pending() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="corner_button" onClick={handleOpen}>+ ADD</Button>
      <div id='portal'>
        <Modal open={open} isClose={handleClose}>Modal Content</Modal>
      </div>

      <table border={3} style={{ marginTop: "70px", maxWidth: "1000px" }}>
        <tbody>
          <tr>
            <td> Hello </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pending;
