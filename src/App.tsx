import { useState, useCallback } from "react";
import Search from "./components/Search/Search";
import LeaderBoard from "./pages/LeaderBoard";

import "./App.css";

function App() {
  const [url, setUrl] = useState("https://github.com/stoplightio/prism");

  const handleUrlChange = useCallback((value) => {
    setUrl(value);
  }, []);

  return (
    <div className="container">
      <br />
      <Search handleChange={handleUrlChange} value={url} />
      <LeaderBoard url={url} />
    </div>
  );
}

export default App;
