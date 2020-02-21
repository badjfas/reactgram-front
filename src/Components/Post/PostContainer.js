import React, { useState, useEffect } from "react";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import { ME } from "../../SharedQueries";
import { toast } from "react-toastify";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  location,
  caption
}) => {
  const {data:meQuery} = useQuery(ME);
  const comment = useInput("");
  const [isLikeds, setIsLiked] = useState(isLiked);
  const [likeCounts, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slide();
  }, [currentItem]);

  const toggleLike = async () => {
    await toggleLikeMutation();
    if (isLikeds === true) {
      setIsLiked(false);
      setLikeCount(likeCounts - 1);
      console.log(likeCount, "-");
    } else {
      setIsLiked(true);
      setLikeCount(likeCounts + 1);
      console.log(likeCount, "+");
    }
  };

  const onKeyPress =async (e)  => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      comment.setValue("");
      try{
        await addCommentMutation();
        setSelfComments([...selfComments, {
          id: Math.floor(Math.random() * 200),
          text: comment.value,
          user: {userName:meQuery.me.username}
        }]);
      }catch{
        toast.error("잠시후 다시 시도 해주세요.")
      }
    }
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCounts}
      isLiked={isLikeds}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      caption={caption}
      location={location}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired
  }),
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Url: PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired
      })
    })
  ).isRequired,
  createdAt: PropTypes.string
};

export default PostContainer;
