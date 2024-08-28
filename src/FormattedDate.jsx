export default function FormattedDate({ date }) {
  // console.log(date);

  return (
    <div className="h6">
      <div>{date.toDateString().slice(0, -5)}</div>
      <br />
      <div>Last updated: {date.toTimeString().slice(0, -36)}</div>
    </div>
  );
}
