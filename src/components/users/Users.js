import {usersList} from "../../Data-file";

export default function Users() {
  return (
    <div>
      {
        usersList.map((userItem, index) => <div key={index}>{userItem.id} {userItem.name}</div>)
      }



    </div>
  );
}