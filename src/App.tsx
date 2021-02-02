import Search from "./components/Search/Search";
import ProfileList from "./components/Profile/ProfileList";
import { useLeaderboardListQuery } from "./generated/graphql";

import "./App.css";

function App() {
  const { data, error, loading } = useLeaderboardListQuery({
    variables: {
      url: "https://github.com/stoplightio/prism",
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <div className="container">
      <br />
      <Search />
      <ProfileList data={data} />
    </div>
  );
}

export default App;
