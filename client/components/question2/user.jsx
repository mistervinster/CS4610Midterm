export const User = ({user}) => {
    if (user.isAdmin == true) {
        return (
        <div className="border-2 rounded p-4">
            <p className="text-green-300">{user.name}</p>
            <p>user.email</p>
        </div>
        );
    }
    else return (
        <div className="border-2 rounded p-4">
            <p>{user.name}</p>
            <p>user.email</p>
        </div>
    );
};