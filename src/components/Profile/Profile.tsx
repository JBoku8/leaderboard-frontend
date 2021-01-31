import Todo from "../../interfaces/Todo.interface";

interface Props {
  todo: Todo;
  order: number;
}

function Profile({ order, todo }: Props) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
          <h4 className="h1">{order}</h4>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-start">
          <img
            src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
            alt="..."
            className="img-fluid w-50 align-self-center"
          />
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-start">
          <h4 className="h3">{todo.title}</h4>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <p className="card-text text-right">
              {/* should be component */}
              <span className="text-success font-weight-bold">
                220 additions
              </span>{" "}
              +{" "}
              <span className="text-danger font-weight-bold">20 deletions</span>
              <br />
              <span className="text-dark font-weight-bold">= 440 updates</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
