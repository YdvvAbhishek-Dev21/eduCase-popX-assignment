import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Button from "../components/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col justify-end flex-1 pb-10">
        <h1 className="text-2xl font-bold mb-1">Welcome to PopX</h1>

        <p className="text-gray-500 text-sm font-semibold mb-6">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>

        <Button text="Create Account" onClick={() => navigate("/signup")} />

        <div className="mt-3">
          <Button
            text="Already Registered? Login"
            secondary
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </MobileLayout>
  );
}
