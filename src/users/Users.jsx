import UserItem from "./UserItem";

const Users = ({ users }) => {

    const userStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem"
    }

    return <div style={userStyle}>
        {users.map(user => (
            <UserItem key={user.id} user={user} />
        ))}
    </div>;
};

export default Users;
