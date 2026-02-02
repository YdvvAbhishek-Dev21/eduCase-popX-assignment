import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import { UserContext } from "../context/UserContext";
import Input from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const isValid = email && password;

  const handleSubmit = () => {
    if (!isValid) return;

    setUser({ email, name: "User" });
    navigate("/account");
  };

  return (
    <MobileLayout>
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">
        Signin to your <br /> PopX account
      </h1>

      {/* Subtitle */}
      <p className="text-sm font-semibold text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
      </p>

      {/* Inputs */}
      <Input
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login button */}
      <button
        disabled={!isValid}
        onClick={handleSubmit}
        className={`w-full py-2 rounded-md font-semibold text-white transition ${
          isValid
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Login
      </button>
    </MobileLayout>
  );
}
