export interface Props {
  handleChange: (newValue: string) => void;
  value: string;
}

function Input(props: Props) {
  return (
    <input
      className="form-control form-control-lg form-control-borderless rounded-0"
      type="search"
      value={props.value}
      onChange={({ target }) => {
        props.handleChange(target.value);
      }}
      placeholder="Search topics or keywords"
    />
  );
}

export default Input;
