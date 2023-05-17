const Login = {
  path: "/login",
  name: "Login",
  component: () =>
    import(/* webpackChunkName: "Login" */ "@/views/Login/index.vue"),
};

export default Login;
