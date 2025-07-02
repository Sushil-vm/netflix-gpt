export const checkValidData = (email,password)=>{

    // const isNameValid  = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)  ;

    // if(!isNameValid) return "Please enter a valid full name, starting each word with a capital letter. Only letters, spaces, hyphens, apostrophes, and periods are allowed."
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

   return null;
}