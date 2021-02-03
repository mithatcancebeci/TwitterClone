import React, { useEffect, useState } from "react";
import { useApiProgress } from "../Shared/ApiProgress";
import { getUsers } from "../api/apiCall";
import UserListItem from "./UserListItem";
const WhoToFollow = () => {
  const [page, SetPage] = useState({
    content: [],
    size: 3,
    currentPage: 0,
  });
  const [loadFailure, SetLoadFailure] = useState();
  const pendingApiCall = useApiProgress("get", "/api/1.0/getUsers?page", true);
  const { content: users } = page;
  const loadUsers = (page) => {
    SetLoadFailure(false);
    getUsers(page)
      .then((response) => {
        SetPage(response.data);
      })
      .catch((error) => {
        SetLoadFailure(true);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      
      <div>
        {users.map((user) => (
          <UserListItem key={user.username} user={user}></UserListItem>
        ))}
      </div>
      {loadFailure && <span className="badge-danger">Failed data</span>}
    </div>
  );
};

export default WhoToFollow;
