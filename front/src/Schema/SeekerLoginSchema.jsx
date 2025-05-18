import * as YUP from "yup";

let SeekerLoginSchema = YUP.object({
email : YUP.string().email("Email id is invalid").required("Please enter your username"),
password:YUP.string().required("Enter your password")
}
);

export default SeekerLoginSchema;
