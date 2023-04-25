import React, { useState,useEffect,useCallback } from "react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { addComments,getPostComment,showError,hideLoading, } from "../Redux/Action";
import { deleteComments } from "../Redux/Action";
import SingleComments from "./Single-comments";
import {getPost} from "../Services/Services";
import { showError,hideLoading,showLoading,clearError } from "../Redux/Action";

const Comments = () => {
  const dispatch = useDispatch();
  const { comments,loading,error } = useSelector((state) => state.CommentReducer);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(addComments(input, id));
    setInput("");
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit}>
      
        <div className="comments-item">
          <input 
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="comment"
            value={input}
          />
          <input type="submit" hidden />
        </div>
      </form>
      {
      comments.map((elem)=>{
        return  <SingleComments key={elem.id} {...elem}/>
      })

      }
    </div>
  );
};

export default Comments;

