export const useGetUserInfo = () => {
  const { useName, profilePhoto, userId, isAuth } = JSON.parse(
    localStorage.getItem("userInfo")
  );
  return { useName, userId, profilePhoto, isAuth };
};
