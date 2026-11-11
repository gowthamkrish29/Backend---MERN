import { useNavigate } from "react-router-dom";

const Hooks = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="my-30 flex justify-center items-center">
      <button onClick={handleBack} className="bg-amber-300 p-3 rounded-2xl font-bold text-center justify-center mx-20 border-t-5 border-b-5">
        Go Back ⬅️
      </button>

      <button onClick={handleForward} className="bg-amber-300 p-3 rounded-2xl font-bold text-center justify-center mx-20 border-t-5 border-b-5">
        Go Forward ➡️
      </button>

      <button onClick={handleLogin} className="bg-amber-300 p-3 rounded-2xl font-bold text-center justify-center mx-20 border-t-5 border-b-5">
        Login 👤
      </button>
    </div>
  );
};

export default Hooks;