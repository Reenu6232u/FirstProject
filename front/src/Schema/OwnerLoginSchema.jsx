import * as YUP from "yup";

let loginSchema = YUP.object({
email : YUP.string().email("Your email is invalid").required("Please enter your Email Id"),
password:YUP.string().required("Enter your password")
}
);

export default loginSchema;



