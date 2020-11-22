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

const ProfileService = {
  getProfile,
  updateProfile,
};

export default ProfileService;
