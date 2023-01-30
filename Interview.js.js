function Root() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [text, setText] = React.useState("");

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id="starter-div">
        {currentPage === 1 ? (
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>  
                <img src="https://cdn.osxdaily.com/wp-content/uploads/2014/09/macbook-pro-black-screen.jpg" alt="MacBook Pro 14" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Growth Jocky" />
            </div>
                  </div>
        ) : (
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD65pj5sSyIlhhScpIsUeJXq1Vvaf219a0BA&usqp=CAU" alt="iPhone 13 Pro" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Growth Jocky" />
            </div>
                  </div>
      )}
        <div>
            <button onClick={handlePrevious}>Prev</button><button onClick={handleNext}>Next</button>
        </div>
    </div>
  );
}

// Boilerplate code, don't edit unless you know what you are doing.
const rootContainer = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootContainer);
reactRoot.render(<Root />);
