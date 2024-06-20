import { observer } from 'mobx-react-lite';
import React from 'react';
import getLikeStore from 'src/Stores/LikeStore';

const LikeButton: React.FC = observer(() => {
  const heartEmpty = require("../Assets/Images/heartempty.png");
  const heartFilled = require("../Assets/Images/heartfilled.png");
  const likeStore = getLikeStore();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      height: "100%", 
      width: "100%", 
      padding: "20px", 
      boxSizing: "border-box"
    }}>
      <img
        src={likeStore.isLiked.get() ? heartFilled : heartEmpty}
        alt="Like Button"
        style={{
          marginTop: "100px",
          height: "25%", 
          maxWidth: "100%",
          cursor: "pointer",
        }}
        onClick={() => likeStore.toggleLike()}
      />
      <p style={{
        marginTop: "10px",
        textAlign: "center",
        fontSize: "1.2em",
      }}>Likes: {likeStore.likeCount.get()}</p>
    </div>
  );
});

export default LikeButton;
