function Profile(props: any) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
            alt="..."
            className="img-fluid w-75 align-self-center"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
