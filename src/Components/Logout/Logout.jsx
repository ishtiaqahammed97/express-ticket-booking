const handleLogOut = () => {
  // remove user from local storage
  localStorage.removeItem("user");
};

export default handleLogOut;
