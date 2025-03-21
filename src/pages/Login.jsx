import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Hatalı şifre!");
    }
  };

  return (
    <div>
      <h2>Admin Girişi</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre girin"
      />
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default Login;
