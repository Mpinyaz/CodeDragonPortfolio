import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="error404">
      <p id="error404">
        E<span>R</span>
        ROR
      </p>
      <p id="errorcode">
        4<span>0</span>
        <span>4</span>
      </p>
      <p id="errortext">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
    </div>
  );
};
export default NoMatch;
