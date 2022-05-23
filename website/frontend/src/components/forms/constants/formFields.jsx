//? Holds all the input fields related constants for the form like placeholder, value, name, field type, etc.
//? Each array contains an object that contains attribues for the input fields

const loginFields = [
    {
        labelText:"Email Address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email Address"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"
    }
]

const registerFields = [
    {
        labelText:"Full Name",
        labelFor:"name",
        id:"name",
        type:"text",
        autoComplete: "username",
        isRequired: true,
        placeholder:"Full Name"
    },
    {
        labelText:"Email Address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email Address"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"
    }
]

export {loginFields, registerFields}