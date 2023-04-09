import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import Axios from "axios";

function Excuser() {
  const [target, setTarget] = useState("");
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${target}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Select the target for your excuse
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={target}
          onChange={(event) => setTarget(event.target.value)}
        >
          <FormControlLabel value="party" control={<Radio />} label="Party" />
          <FormControlLabel value="family" control={<Radio />} label="Family" />
          <FormControlLabel value="office" control={<Radio />} label="Office" />
          <FormControlLabel
            value="children"
            control={<Radio />}
            label="Children"
          />
          <FormControlLabel
            value="college"
            control={<Radio />}
            label="College"
          />
        </RadioGroup>
        <Button onClick={fetchExcuse}>
          Generate a dumb excuse for: {target}
        </Button>
      </FormControl>
      <h1>{excuse}</h1>
    </div>
  );
}

export default Excuser;
