import { Comment, Avatar } from "antd";

const CommentsUnderPost = ({ comments }) =>
  comments.map((item, index) => (
    <Comment
      author={<a href="comments">{item.email}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{item.body}</p>}
      key={"comment" + index}
    ></Comment>
  ));

export default CommentsUnderPost;
