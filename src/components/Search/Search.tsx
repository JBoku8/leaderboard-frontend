import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Card from "../Card/Card";

interface Props {}

function Search(props: Props) {
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <h3 className="col text-center">Github Leaderboard App</h3>
      </div>
      <div className="col-12 col-md-10 col-lg-8">
        <form>
          <Card>
            <div className="col-auto px-1">
              <i className="fas fa-search h4 text-body"></i>
            </div>
            <div className="col">
              <Input />
            </div>
            <div className="col-auto">
              <Button />
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default Search;
