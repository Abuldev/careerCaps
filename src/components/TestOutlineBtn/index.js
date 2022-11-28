import { TestButtonWrapper } from "../../styles";

import { useNavigate } from "react-router-dom";

export const TestOutlineBtn = () => {
  const navigate = useNavigate()
  return <TestButtonWrapper onClick={() => navigate("/quiz")}>Testni Boshlash</TestButtonWrapper>;
};
