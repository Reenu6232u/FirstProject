import * as Yup from 'yup';

const AdminSchema = Yup.object({
  username: Yup.string("Username is invalid").required('Username is required'),
  password: Yup.string("Incorrect password").required('Password is required')
});

export default AdminSchema;