import * as YUP from 'yup'

let PropertySchema =  YUP.object({
    title: YUP.string().required("Insert Property Title"),
    address:YUP.string().required("Insert Property address"),
    property_type :YUP.string().required("Insert your Property type"),
    rent:YUP.number().typeError("Insert Numbers only").required("Insert property rent"),
    deposite:YUP.number().required("Insert security deposite amount"),
})

export default PropertySchema