const NoMatch = () => {
  return (
    <div>
      <div className="container">
        <div className="error-page">
          <h1 className="error-code">404</h1>
          <p className="error-description">
            {"We can't seem to find the page you're looking for."}
          </p>
        </div>
      </div>
    </div>
  );
};
export default NoMatch;
