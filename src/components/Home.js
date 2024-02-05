import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 font-serif">
      <p className="text-2xl font-sans mb-4">¡Bienvenido, {user.displayName || user.email}!</p>
      <div className="mb-4">
        <p className="text-lg mb-2">Aquí tienes más información sobre tu cuenta:</p>
        <ul className="list-disc pl-4">
          <li>Nombre: {user.displayName}</li>
          <li>Email: {user.email}</li>
        </ul>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </button>
    </div>
  </div>
  );
}
