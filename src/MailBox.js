export default function MailBox(props) {
  return (
    props.isLogged &&
    props.unreadMessages.length > 0 && (
      <h2>Vous avez {props.unreadMessages.length} message(s) non lus</h2>
    )
  );
}
