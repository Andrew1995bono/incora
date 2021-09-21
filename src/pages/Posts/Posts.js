import React, { useEffect, useState } from "react";
import { Button, Table, Modal, message } from "antd";
import columns_posts from "./postsColumns";
import { requestPosts } from "../../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loading: state.postsReducer.loading,
  posts: state.postsReducer.posts,
  error: state.postsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (id) => dispatch(requestPosts(id)),
});

const Posts = ({ loading, posts, getPosts, history }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getPosts(history.location.state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetching POST request by clicking "OK" button in a modal window
  const handleOk = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        { method: "POST" }
      );
      const data = await response.json();
      console.log(data);
      message.success(`${data.id} was successfully added`);
    } catch (error) {
      message.error(error);
    }
    setIsModalVisible(false);
  };

  return (
    <>
      <Table
        loading={loading}
        columns={columns_posts}
        dataSource={posts}
        rowKey={"id"}
        pagination={false}
      />
      <Button
        onClick={() => setIsModalVisible(true)}
        type="primary"
        shape="default"
      >
        Add new
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <h2>Add some post:</h2>
        <input type="text" />
        <p>Some post content...</p>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
