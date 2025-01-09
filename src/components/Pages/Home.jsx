import UserResults from "../users/UserResult";
import UserSearch from "../users/UserSearch";

function Home({ handleAlert }) {
  return (
    <>
      <UserSearch handleAlert={handleAlert} />
      <UserResults />
    </>
  );
}

export default Home;
