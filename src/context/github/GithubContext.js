import { createContext, useState } from "react";

const GithubContext = createContext();
// 깃허브 주소와 토큰 변수지정
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//프로바이더가 전역으로 컨텍스트를 사용할 수 있게 함
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]); //유저정보를 담을 상태
  const [loading, setLoading] = useState(false); //로딩 상태
  //테스트 유저 리스트
  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
