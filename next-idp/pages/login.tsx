import { login, User } from "@/services/api";
import styles from "./login.module.css";

const Login = () => {
  return (
    <main>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <form
          className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const { username, password } = Object.fromEntries(formData);
            //const { user } =
            await login({ username, password } as User);
          }}
        >
          <label htmlFor="username">Email</label>
          <input type="email" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button className={styles.btn}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
