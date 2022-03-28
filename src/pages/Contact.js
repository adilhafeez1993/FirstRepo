import { useLocation } from "react-router-dom";

export default function Contact() {
  const querryString = useLocation().search;
  console.log(querryString);

  const querryParams = new URLSearchParams(querryString);
  const name = querryParams.get("name");

  return (
    <div>
      <h2>Hey {name} Contact Us here....</h2>
      <p>
        Many novice writers tend to make a sharp distinction between content and
        style, thinking that a paper can be strong in one and weak in the other,
        but focusing on organization shows how content and style converge in
        deliberative academic writing. Your professors will view even the most
        elegant prose as rambling and tedious if there isnot a careful coherent
        argument to give the text meaning. Paragraphs are the “stuff ” of
        academic writing and, thus, worth our attention here.
      </p>
    </div>
  );
}
