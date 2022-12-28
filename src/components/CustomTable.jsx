import { useEffect, useState } from "react";
import { Table as TableAntd, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { routeActions } from "../actions/routeAction";
import {
  requestListLoading,
  selectListRequests,
} from "../selectors/requestListSelector";
import { requestListActions } from "../actions/requestListAction";

const Table = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const loading = useSelector(requestListLoading);
  const requests = useSelector(selectListRequests);

  useEffect(() => {
    dispatch(requestListActions.fetchRequestList());
  }, [dispatch]);

  const columns = [
    {
      title: "Order No.",
      dataIndex: "name",
      render: (text, record) => {
        return <p>{text}</p>;
      },
    },
    {
      title: "Origin",
      dataIndex: "original",
      render: (text, record) => {
        return <Typography>{record.original}</Typography>;
      },
    },
    {
      title: "Destination",
      dataIndex: "destination",
      render: (text, record) => {
        return <Typography>{record.destination}</Typography>;
      },
    },
  ];

  return (
    <TableAntd
      loading={loading}
      onRow={(record, index) => {
        return {
          onClick: () => {
            dispatch(
              routeActions.fetchRoute({
                original: record.original,
                destination: record.destination,
              })
            );
            setSelectedRowKeys([index + ""]);
          },
        };
      }}
      rowSelection={{ selectedRowKeys }}
      columns={columns}
      dataSource={requests}
      pagination={{ position: ["bottomCenter"] }}
    ></TableAntd>
  );
};

export default Table;
