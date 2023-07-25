
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

class SolveMedia extends React.Component <any, any>  {
  constructor(props:any) {
    super(props);
    this.state = { isVerified: false, text: '', items: []};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value: any) {
    console.log("Captcha value:", value);
    this.setState({ isVerified: true });
  }

  render() {
    return (
      <div>
        <h3>ReCaptcha</h3>
        <ReCAPTCHA
        sitekey="6LcuHk0nAAAAAKuCzHU15f6_riLOC7GWITPn9WoA"
        onChange={this.handleOnChange}
      />

      </div>
    );
  }
}



export default SolveMedia;


// Use this site key in the HTML code your site serves to users.
// site key = 6LcuHk0nAAAAAKuCzHU15f6_riLOC7GWITPn9WoA
// Use this secret key for communication between your site and reCAPTCHA.
// secret key = 6LcuHk0nAAAAADiSL868tqFke--ivoJnGnNaWJoR