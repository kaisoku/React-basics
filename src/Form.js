import { useState } from "react";

export default function Form(props) {
  const [nom, setNom] = useState("");
  const [comment, setComment] = useState("");
  const [selected, setSelected] = useState("coconut");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vous vous appelez " + nom);
    console.log("Vous avez commenter " + comment);
    console.log("parfum préféré " + selected);
  };

  const handleChange = (e) => {
    setNom(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">
        Nom: <input type="text" value={nom} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label htmlFor="commentaire">
        Commentaire <textarea value={comment} onChange={handleCommentChange} />
      </label>{" "}
      <br />
      <br />
      <label htmlFor="parfum">
        Sélectionnez votre parfum préféré <br />
        <select value={selected} onChange={handleSelectChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <br />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
}
