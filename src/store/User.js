import { Store } from "pullstate";
const UserStore = new Store({ user: null });
const isLogin = (data) => {
  UserStore.update((s) => {
    s.user = { ...data };
  });
};
const isLogout = () => {
  UserStore.update((s) => {
    s.user = null;
  });
};
export { UserStore, isLogin, isLogout };
