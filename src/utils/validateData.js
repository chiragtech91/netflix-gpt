export const checkValidData = (email, password) => {
  //debugger;
  let msg = "";
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return (msg = "Email is not valid.");

  if (!isPasswordValid) return (msg = "Password is not valid.");

  return msg;
};
