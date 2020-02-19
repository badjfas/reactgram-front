import React, { useState ,useEffect} from "react";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";

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
    const [isLikeds, setIsLiked] = useState(isLiked);
    const [likeCounts, setLikeCount] = useState(likeCount);
    const [currentItem,setCurrentItem] = useState(0);
    const comment = useInput("");
    
    const slide = () => {
    const totalFiles =files.length;
        if(currentItem===totalFiles-1){
            setTimeout(()=>setCurrentItem(0),3000);
      }else {
          setTimeout(()=>setCurrentItem(currentItem+1),3000);
        }
    };
    useEffect(()=>{
        slide();
    },[currentItem]);
  
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
      user: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          userName: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  createdAt: PropTypes.string
};

export default PostContainer;
