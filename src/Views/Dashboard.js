const Dashboard = () => {
  const user = localStorage.getItem("user");
  const parsed_user = JSON.parse(user);

  return (
    <div>
      <h1>Welcome {parsed_user.firstName}!</h1>
    </div>
  );
};

export default Dashboard;
