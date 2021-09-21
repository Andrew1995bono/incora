import ButtonWithRedirect from "../../Components/ButtonWithRedirect";

const columns = [
  {
    title: "UserID",
    dataIndex: "userId",
    key: "userId",
    width: 50,
    fixed: "left",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 50,
    fixed: "left",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 410,
    fixed: "left",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
    width: 1000,
    fixed: "left",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (record) => (
      <ButtonWithRedirect
        recordId={record.id}
        text={"Details"}
        pathname={"/post"}
      />
    ),
  },
];

export default columns;
