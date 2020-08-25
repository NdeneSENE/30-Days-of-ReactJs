import React from "react";
import { PostContext } from "../App";

function CreatePost({ user }) {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user, id: Date.now() };
    //handleAddPost(post);
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    imageInputRef.current.value = "";
  }

  return (
    <div>
      <h1>Créer un Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Créer un Post"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default CreatePost;
