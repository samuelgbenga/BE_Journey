import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  //   const action = { type: "FETCH_ALL", payload: [] };

  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
