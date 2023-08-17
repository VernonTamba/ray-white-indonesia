import React from "react";
import "../styles/DashboardItem.css";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import DollarIcon from "@mui/icons-material/MonetizationOnOutlined";
import SupportIcon from "@mui/icons-material/SupportAgentOutlined";

const DashboardItem = ({ gridName }) => {
  const rightGridData = [
    {
      name: "Admin Office",
      number: "4",
    },
    {
      name: "Principle",
      number: "12",
    },
    {
      name: "Author",
      number: "6",
    },
    {
      name: "Super Admin",
      number: "3",
    },
    {
      name: "Principle LMI",
      number: "11",
    },
    {
      name: "BDE",
      number: "7",
    },
    {
      name: "Bank Officer",
      number: "124",
    },
    {
      name: "Bank Admin",
      number: "210",
    },
    {
      name: "Bank Principal",
      number: "36",
    },
  ];

  return (
    <div className="dashboardItem">
      {gridName === "left" ? (
        <>
          <div className="dashboardItem__item leftGrid">
            <AccountIcon className="dashboardItem__item--image" />
            <h3 className="dashboardItem__item--title">9823</h3>
            <p className="dashboardItem__item--role">User</p>
          </div>
          <div className="dashboardItem__item leftGrid">
            <DollarIcon className="dashboardItem__item--image" />
            <h3 className="dashboardItem__item--title">243</h3>
            <p className="dashboardItem__item--role">Borrower</p>
          </div>
          <div className="dashboardItem__item leftGrid">
            <SupportIcon className="dashboardItem__item--image" />
            <h3 className="dashboardItem__item--title">56</h3>
            <p className="dashboardItem__item--role">Loan Adviser</p>
          </div>
        </>
      ) : (
        <>
          {rightGridData.map((data) => (
            <div className="dashboardItem__item rightGrid">
              <div className="rightGrid__left">
                <AccountIcon className="dashboardItem__item--image" />
              </div>
              <div className="rightGrid__right">
                <p className="dashboardItem__item--role">{data.name}</p>
                <h3 className="dashboardItem__item--title">{data.number}</h3>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DashboardItem;
