import React, { useEffect } from "react";
import { Table } from "antd";
import { requestUsers } from "../../store/actions";
import { connect } from "react-redux";
import columns from "./userColumns";

const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  error: state.userReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(requestUsers()),
});

const Users = ({ loading, users, getUsers }) => {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={users}
        rowKey={"id"}
        pagination={false}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
