import Header from "../components/header";

const Dashboard = (props) => {
  const { setIsLoggedIn } = props;
  const user = localStorage.getItem("user");
  const parsed_user = JSON.parse(user);

  return (
    <div>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <h1>Welcome {parsed_user.firstName}!</h1>
    </div>
  );
};

export default Dashboard;
