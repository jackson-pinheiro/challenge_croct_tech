import { LayoutDefault } from "@presentation/layouts";
import { Home } from "@presentation/pages/home";
import "../../presentation/styles/global.css";
const Application: React.FC = () => {
  return (
    <>
      <LayoutDefault>
        <Home />
      </LayoutDefault>
    </>
  );
};

export default Application;
