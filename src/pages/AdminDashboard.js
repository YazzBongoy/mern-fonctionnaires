import { useEffect, useState } from "react";
import { getStats } from "../services/adminService";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Tableau de bord Admin</h1>
      {stats ? (
        <div>
          <p>Total Fonctionnaires : {stats.totalFonctionnaires}</p>
          <h2>Répartition par statut</h2>
          <ul>
            {stats.parStatut.map((s) => (
              <li key={s._id}>{s._id} : {s.count}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Chargement des statistiques...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
