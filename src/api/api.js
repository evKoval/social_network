import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "807c9c53-5ee2-4058-a475-cb30805d36e4"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userID) {
    console.warn("Obsolete method. Please, use profileAPI object");
    return profileAPI.getProfile(userID);
  }
};

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/${userID}`);
  },
  getStatus(userID) {
    return instance.get("profile/status/" + userID);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put("profile/photo", formData, {headers:{'Content-Type':'multipart/form-data'}});
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  }
};
