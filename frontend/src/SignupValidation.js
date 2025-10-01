
function SignupValidation(values) {
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(!values.email) {
        errors.email = "Email is required!";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "This is not a valid email format!";
    }
    if(!values.password) {
        errors.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password should be 6-16 characters and include at least one special character and number!";
    }
    if(!values.confirm_password) {
        errors.confirm_password = "Confirm Password is required";
    } else if (values.password !== values.confirm_password) {
        errors.confirm_password = "Passwords do not match!";
    }
    if(!values.name) {
        errors.name = "Name is required";
    }
    return errors;

}

export default SignupValidation;