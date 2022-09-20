import classes from "./styles";
import UserlistItem from "./userlist-item/UserListItem";

function UserList() {
  return (
    <div className={classes.container}>
      <UserlistItem name="Robert" ranking="Master" status="available" />
    </div>
  );
}

export default UserList;
