import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const cal = () => {
  return (
    <div>
      <div className="row">
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Thick/Size</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
        </div>
        <div className="row">
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <TextField
              required
              className="textfield"
              id="outlined-number"
              label="Top Diameter"
              variant="outlined"
              type="number"
              onChange={(e) => setTopdiameter(e.target.value)}
            />
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
        </div>
        <div className="row">
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <TextField
              required
              className="textfield"
              id="outlined-number"
              label="Top Diameter"
              variant="outlined"
              type="number"
              onChange={(e) => setTopdiameter(e.target.value)}
            />
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
        </div>
        <div className="row">
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <TextField
              required
              className="textfield"
              id="outlined-number"
              label="Top Diameter"
              variant="outlined"
              type="number"
              onChange={(e) => setTopdiameter(e.target.value)}
            />
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
        </div>
        <div className="row">
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <TextField
              required
              className="textfield"
              id="outlined-number"
              label="Top Diameter"
              variant="outlined"
              type="number"
              onChange={(e) => setTopdiameter(e.target.value)}
            />
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
          <div>
            <p>Shell Plate</p>
          </div>
        </div>
    </div>
  );
};

export default cal;
