import React, { useEffect } from "react";
import { Button } from "antd";
import { requestPost } from "../../store/actions";
import { connect } from "react-redux";
import CommentsUnderPost from "./Comments";

const mapStateToProps = (state) => ({
  loading: state.postReducer.loading,
  comments: state.postReducer.post,
  error: state.postReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(requestPost(id)),
});

const Post = ({ loading, comments, getPost, history }) => {
  const postId = history.location.state;

  useEffect(() => {
    getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Fetching some PUT request to the API server
  const handleEdit = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  //Fetching some DELETE request to the API server
  const handleDelete = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <h1>{`Post ${postId}`}</h1>
      <CommentsUnderPost comments={comments} />
      {!loading && (
        <>
          <Button onClick={handleEdit} type="primary" shape="default">
            Edit
          </Button>
          <Button onClick={handleDelete} type="primary" danger shape="default">
            Delete
          </Button>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
