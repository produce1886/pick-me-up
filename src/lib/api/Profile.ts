import { Profile } from "@src/types/Data";
import base from "./Api";

const getProfile = (uid: string, reload: number) => {
  if (uid) {
    return base()
      .get(`/users/${uid}`)
      .then((res) => res.data);
  }
  return null;
};

const updateProfile = (uid: string, body: Profile) =>
  base()
    .put(`/users/${uid}`, body)
    .catch((err) => alert("프로필 수정에 실패했습니다"));

const getUserProjectLists = (uid: string) => {
  if (uid) {
    return base()
      .get(`/users/${uid}/projects`)
      .then((res) => res.data);
  }
  return null;
};

const getUserPortfolioLists = (uid: string) => {
  if (uid) {
    return base()
      .get(`/users/${uid}/portfolios`)
      .then((res) => res.data);
  }
  return null;
};

const ProfileService = {
  getProfile,
  updateProfile,
  getUserProjectLists,
  getUserPortfolioLists,
};

export default ProfileService;
