export const Transaction = ({transaction}) => {
    return (
    <div className="border-2 rounded p-4">
        <p>${transaction.amount}</p>
        <p>To: {transaction.toUser.name}</p>
        <p>From: {transaction.fromUser.name}</p>
    </div>
    );
};