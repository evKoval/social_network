import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "My first post", likeCounter: 1 },
    { id: 2, message: "My 2nd post", likeCounter: 2 }
  ]
};

it("checks posts array length incremented", () => {
  let action = addPostActionCreator("text for test");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("adds correct text to new post", () => {
  let action = addPostActionCreator("text for test");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("text for test");
});

it("length of posts array decreased after deleting", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);  
  expect(newState.posts.length).toBe(1);
});
