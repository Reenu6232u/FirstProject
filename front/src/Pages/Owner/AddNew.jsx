import React from "react";
import OwnerSideBar from "../../Component/OwnerSideBar";
import { useFormik } from "formik";
import PropertySchema from "../../Schema/PropertySchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddNew = () => {
    let navigate = useNavigate();

  let propFrm = useFormik({
    validationSchema : PropertySchema,
    initialValues: {
      title: "",
      address: "",
      property_type: "",
      rent: "",
      image:"",
      deposite: "",
      amenity: "",
    },
    onSubmit: (formData) => {
    //   console.log(formData);
    axios.post(`${import.meta.env.VITE_API_URL}/property`, formData,{
        headers : {Authorization :localStorage.getItem("owner-access-token")}
    }).then(response=>{
        // console.log(response.data)
        
        navigate("/owner/my-property");
    })
    },
  });
  return (
    <div
      className="container my-4"
      style={{ minHeight: "750px", paddingTop: "120px" }}
    >
        <form onSubmit={propFrm.handleSubmit}>
      <div className="row">
        <OwnerSideBar />
        <div className="col-md-9">
          
            <div className="col-md-8 offset-md-2">
            <h4>Add Your Property</h4>
              <div className="my-4">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={propFrm.handleChange}
                  placeholder="Title"
                  className={`form-control ${propFrm.errors.title && propFrm.touched.title ? "is-invalid" : ""}`}
                />
                {
                    propFrm.errors.title && propFrm.touched.title && (
                        <small className="text-danger">
                            {propFrm.errors.title}
                        </small>
                    )
                }
              </div>
              <div className="my-4">
                <label>Property Address</label>
                <input
                  type="textarea"
                  name="address"
                  onChange={propFrm.handleChange}
                  placeholder="Property Address"
                  className= {`form-control ${propFrm.errors.address && propFrm.touched.address ? "is-invalid" : ""}`}
                />
                {
                    propFrm.errors.address && propFrm.touched.address && (
                        <small className="text-danger">
                            {propFrm.errors.address}
                        </small>
                    )
                }
              </div>
              <div className="my-4">
                <label>Property Type</label>
                <select
                  className={`form-control ${propFrm.errors.property_type && propFrm.touched.property_type ? "is-invalid" : ""}`}
                  name="property_type"
                  onChange={propFrm.handleChange}
                >
                  <option>Select</option>
                  <option>Apartment</option>
                  <option>Studio Apartment</option>
                  <option>Duplex</option>
                  <option>Single-Family Home</option>
                  <option>Serviced Apartment</option>
                  <option>PG</option>
                  <option>Flat </option>
                  <option>1BHK</option>
                  <option>2BHK</option>
                  <option>Hostel</option>
                 
                </select>
                {
                    propFrm.errors.property_type && propFrm.touched.property_type && (
                        <small className="text-danger">
                            {propFrm.errors.property_type}
                        </small>
                    )
                }


                <div className="my-4">
                  <label>Rent</label>
                  <input
                    type="text"
                    name="rent"
                    onChange={propFrm.handleChange}
                    placeholder="Rent"
                    className= {`form-control ${propFrm.errors.rent && propFrm.touched.rent ? "is-invalid" : ""}`}
                  />
                  {propFrm.errors.rent && propFrm.touched.rent && (
                    <small className="text-danger">
                      {propFrm.errors.rent}
                    </small>
                  )}
                </div>
                <div className="my-4">
                  <label>Security Deposit</label>
                  <input
                    type="text"
                    name="deposite"
                    onChange={propFrm.handleChange}
                    placeholder="Security Deposit"
                    className= {`form-control ${propFrm.errors.deposite && propFrm.touched.deposite ? "is-invalid" : ""}`}
                  />
                  {
                    propFrm.errors.deposite && propFrm.touched.deposite &&(
                        <small className="text-danger">
                            {propFrm.errors.deposite}
                        </small>
                    )
                  }

                </div>
                <div className="mb-4">
                  <label className="form-label d-block">Amenities</label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      onChange={propFrm.handleChange}
                      value="Parking"
                      id="amenity1"
                    />
                    <label className="form-check-label" for="amenity1">
                      Parking
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      onChange={propFrm.handleChange}
                      value="WiFi"
                      id="amenity2"
                    />
                    <label className="form-check-label" for="amenity2">
                      WiFi
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      onChange={propFrm.handleChange}
                      value="Gym"
                      id="amenity3"
                    />
                    <label className="form-check-label" for="amenity3">
                      Gym
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      onChange={propFrm.handleChange}
                      value="Pool"
                      id="amenity4"
                    />
                    <label className="form-check-label" for="amenity4">
                      Pool
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      onChange={propFrm.handleChange}
                      value="AC"
                      id="amenity5"
                    />
                    <label className="form-check-label" for="amenity5">
                      AC
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      value="Furnished"
                      onChange={propFrm.handleChange}
                      id="amenity"
                    />
                    <label className="form-check-label" for="amenity">
                      Furnished
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="amenity"
                      onChange={propFrm.handleChange}
                      value="Semi-Furnished"
                      id="amenity"
                    />
                    <label className="form-check-label" for="amenity">
                      Semi-Furnished
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Add
                </button>
              </div>
            </div>
          
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddNew;
