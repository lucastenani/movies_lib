import { FaSadTear } from "react-icons/fa";
import "./style.scss";

const NoResult = () => {
  return (
    <div className="noResultsContainer">
      <div className="flex">
        <FaSadTear size={70} />
        <div className="text">
          <h3>NO MATCHES FOUND</h3>
          <p>Please try another search.</p>
        </div>
      </div>
    </div>
  );
};

export default NoResult;
