const URL_API = "http://localhost:3000/posts"; // Reemplazar por la URL de la API

//get
export const getPosts = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

//agregar post
export const addPost = async (post) => {
  const response = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

//borrar post
export const deletePost = async (id) => {
  await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
  });
};

//likes
export const likePost = async (id) => {
  await fetch(`${URL_API}/like/${id}`, {
    method: "PUT",
  });
};