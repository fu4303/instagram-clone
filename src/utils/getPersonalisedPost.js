export const getPersonalisedPost = (postList, followingList, currentUser) => {
  let newPostList = [];

  postList.map((post) => {
    if (post.data().UID == currentUser.displayName) {
      return newPostList.push(post);
    }
    followingList.map((obj) => {
      if (obj.data().following === post.data().UID) {
        return newPostList.push(post);
      }
    });
  });
  return newPostList;
};