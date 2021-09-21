import ButtonWithRedirect from "../../Components/ButtonWithRedirect";

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
    render: (record) => (
      <ButtonWithRedirect
        recordId={record.id}
        text={"Posts"}
        pathname={"/posts"}
      />
    ),
  },
];

export default columns;
