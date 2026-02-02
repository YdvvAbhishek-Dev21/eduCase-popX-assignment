import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { UserContext } from "../context/UserContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("no"); // default No

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !phone || !email || !password) return;

    // Store all details in context
    setUser({ name, phone, email, company, isAgency });
    navigate("/account");
  };

  // Required fields: name, phone (10 digits), email, password
  const isValid = name && phone.length === 10 && email && password;

  return (
    <MobileLayout>
      <h1 className="text-2xl font-bold mb-6">
        Create Your <br /> PopX Account
      </h1>

      {/* Inputs */}
      <Input
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Phone Number"
        value={phone}
        onChange={(e) => {
          if (/^\d*$/.test(e.target.value) && e.target.value.length <= 10) {
            setPhone(e.target.value);
          }
        }}
      />

      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Company Name */}
      <Input
        label="Company Name "
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      {/* Are you an agency? */}
      <div className="mb-6">
        <p className="text-gray-700 text-sm mb-2">Are you an agency?</p>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={isAgency === "yes"}
              onChange={(e) => setIsAgency(e.target.value)}
              className="accent-indigo-600"
            />
            <span>Yes</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={isAgency === "no"}
              onChange={(e) => setIsAgency(e.target.value)}
              className="accent-indigo-600"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Create Account button */}
      <Button
        
        text="Create Account"
        onClick={handleSubmit}
        disabled={!isValid}
      />
    </MobileLayout>
  );
}
