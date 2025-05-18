import * as YUP from "yup";

let SeekerSignUpSchema = YUP.object({
  fullname: YUP.string().required("Please Enter Your Full Name"),
  email: YUP.string().email("Invalid Email").required("Insert Your Correct Email Address"),
  password: YUP.string().required("Enter Your Password"),
  repassword: YUP.string().oneOf([YUP.ref("password")],"Password and Re-password should be same").required("Insert Your Password Again"),
  address: YUP.string().required("Please fill your address"),
  contact: YUP.number().typeError("Insert Numbers Only").required("Insert Your Contact Number"),
  gender: YUP.string().oneOf(["male","female","other"],"Invalid gender selection").required("Select Your Gender"),
});

export default SeekerSignUpSchema;