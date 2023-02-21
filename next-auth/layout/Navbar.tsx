import { getCurrentUser, logout } from "@/services/api";
import { useEffect, useState } from "react";
type User = {
  username: string;
};
const Navbar = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
    loadUser();
  }, []);
  return (
    <nav>
      <ul className="w-full flex justify-between">
        <li>Service Provider</li>
        <li className="flex-grow flex justify-end">
          <span>{user?.username}</span>
          {user && (
            <button onClick={() => logout()}>
              <span className="material-symbols-outlined">logout</span>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
