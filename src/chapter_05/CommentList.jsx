import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요. 소플입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요..",
  },
  {
    name: "김우주",
    comment: "반갑습니다.",
  },
	{
    name: "초대박",
    comment: "인사드립니다.",
  },
	{
    name: "선크림",
    comment: "한 번 놀러오세요.!!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((commnets) => {
        return <Comment name={commnets.name} comment={commnets.comment} />;
      })}
    </div>
  );
}

export default CommentList;
