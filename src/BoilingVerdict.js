export default function BoilingVerdict(props) {
  return props.celsius >= 100 ? <p>L'eau bout </p> : <p>L'eau ne bout pas</p>;
}
