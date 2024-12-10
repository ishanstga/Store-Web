import UserCard from "./UserCard";

function UserCards(props) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {props.users.map((user, index) => {
        return (
          <div>
            <UserCard
              name={user.first_name}
              email={user.email}
              image={user.avatar}
              phone={user.phone}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UserCards;
