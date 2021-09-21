import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { requestUsers } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loading: state.userReducer.loading,
    users: state.userReducer.users,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(requestUsers()),
  };
};

const Users = ({ loading, users, getUsers, history }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      fixed: "left",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: "left",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: 100,
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
      fixed: "left",
    },
    {
      title: "Adress",
      dataIndex: "address",
      children: [
        {
          title: "City",
          dataIndex: ["address", "city"],
          key: "city",
          width: 150,
        },
        {
          title: "Street",
          dataIndex: ["address", "street"],
          key: "street",
          width: 150,
        },
        {
          title: "Suite",
          dataIndex: ["address", "suite"],
          key: "suite",
          width: 150,
        },
        {
          title: "Zipcode",
          dataIndex: ["address", "zipcode"],
          key: "zipcode",
          width: 150,
        },
      ],
    },
    {
      title: "Company",
      children: [
        {
          title: "Company Name",
          dataIndex: ["company", "name"],
          key: "companyName",
          width: 200,
        },
        {
          title: "Bs",
          dataIndex: ["company", "bs"],
          key: "companyBs",
          width: 200,
        },
      ],
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => (
        <Button
          onClick={() => {
            history.push({
              pathname: "/posts",
              state: { detail: row },
            });
          }}
        >
          Posts
        </Button>
      ),
    },
  ];

  const [row, setRow] = useState(0);

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
        onRow={(record) => {
          return {
            onMouseEnter: () => setRow(record.id), // mouse enter row
          };
        }}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
