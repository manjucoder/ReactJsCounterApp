export default function SubmitButton(props) {
  return (
    <div className="button">
      <button type="submit" className="btn btn-pink" onClick={props.action}>
        {props.value}
      </button>
    </div>
  );
}
