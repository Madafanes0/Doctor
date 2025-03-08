import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

type User = {
  id: number;
  rol: string;
  nombre: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios")); // Firestore query
        const usersList: User[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as User),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} - {user.rol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
