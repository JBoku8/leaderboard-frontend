import { Hacker } from "../../generated/graphql";

interface Props {
  hacker: Hacker;
  order: number;
}

function Profile({ order, hacker }: Props) {
  return (
    <div
      className="card mb-3"
      style={{
        minWidth: "100%",
      }}
    >
      <div className="row g-0">
        <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
          <h4 className="h1">{order}</h4>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-start">
          <img
            src={`${hacker?.avatar}`}
            alt="..."
            className="img-fluid w-50 align-self-center"
          />
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
          <h4 className="h3">{hacker.profile}</h4>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <p className="card-text text-right">
              {/* should be component */}
              <span className="text-success font-weight-bold">
                {hacker.commitments?.additions} additions
              </span>{" "}
              +{" "}
              <span className="text-danger font-weight-bold">
                {hacker.commitments?.deletions} deletions
              </span>
              <br />
              <span className="text-dark font-weight-bold">
                = {hacker.commitments?.point} updates
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
