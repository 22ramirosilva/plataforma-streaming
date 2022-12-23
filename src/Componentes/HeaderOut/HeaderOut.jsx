import { React, useState } from "react";
import "./HeaderOut.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const HeaderOut = () => {
  const [value, setValue] = useState();
  return (
    <div className="titles">
      <h4>Welcome to BD Screens</h4>

      <h1>
        Download Unlimited <br /> Movies, Drama, Music Video <br /> and More
        Content.
      </h1>

      <h5>
        Enjoy exclusive Music Video popular movies and Live shows. <br />
        Subscribe <b>BD Screen</b> now
      </h5>

      <div className="input-box">
        <PhoneInput
          className="input"
          placeholder="Enter phone number"
          value={value}
          defaultCountry="UY"
          onChange={setValue}
        />

        <button className="button-subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default HeaderOut;
