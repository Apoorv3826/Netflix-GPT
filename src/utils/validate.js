export const CheckValidation = (email, password) => {
  const Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const Password = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(
    password
  );

  if (!Email) {
    return "Invalid Email";
  } else if (!Password) {
    return "Invalid Password";
  } else {
    return null;
  }
};
