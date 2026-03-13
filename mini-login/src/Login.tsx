const Login = ({ login }) => {
  return (
    <form>
      <label htmlFor="username">Felhasználónév: </label>
      <input type="text" id="username" name="username" value="" />
      <br />
      <label htmlFor="password">Jelszó: </label>
      <input type="password" id="password" name="password" value="" />
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default Login;
