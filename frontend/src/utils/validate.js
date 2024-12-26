export const checkValidData = ( email, password) => {
  //regex
  const isVaildEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//   const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

//   if (!isValidName) return "Name is not valid";
  if (!isVaildEmail) return "Email Id is not valid";
  if (!isValidPassword) return "Password is not vaild";

  return null; // null means no errors
};
