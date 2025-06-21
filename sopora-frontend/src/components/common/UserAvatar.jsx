const UserAvatar = ({ name = "User" }) => (
  <div className="user-avatar">
    <span role="img" aria-label="user">👤</span>
    <span>{name}</span>
  </div>
);

export default UserAvatar;
