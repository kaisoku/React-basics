import FancyBorder from "./FancyBorder";
export default function WelcomeDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Bienvenue</h1>
      <p className="Dialog-message">merci de visiter le vaisseau spatial !</p>
    </FancyBorder>
  );
}
