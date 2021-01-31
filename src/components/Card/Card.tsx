interface Props {
  children: any;
}

function Card({ children }: Props) {
  return (
    <div className="card card-sm">
      <div className="card-body row no-gutters align-items-center">
        {children}
      </div>
    </div>
  );
}

export default Card;
