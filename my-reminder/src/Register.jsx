import { useRef, useState, useEffect } from "react";
import { faTimes, faCheck, faInfoCircle } from "react-icons/fa";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}&/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){8,20}&/;

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Use Effect
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);

    const check = pwd === matchPwd;
    validMatchPwd(check);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"}>
        {errorMsg}
      </p>
      <h1>Register</h1>

      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={setUserFocus(true)}
          onBlur={setUserFocus(false)}
        />
      </form>
    </section>
  );
};

export default Register;
