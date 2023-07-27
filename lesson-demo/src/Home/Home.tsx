import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;
