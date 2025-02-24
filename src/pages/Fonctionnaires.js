import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFonctionnaires } from "../redux/slices/fonctionnaireSlice";

const Fonctionnaires = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.fonctionnaires);

  useEffect(() => {
    dispatch(fetchFonctionnaires());
  }, [dispatch]);

  return (
    <div>
      <h1>Liste des Fonctionnaires</h1>
      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur lors du chargement.</p>}
      {status === "succeeded" && (
        <ul>
          {list.map((f) => (
            <li key={f.matricule}>{f.nom} - {f.ministere}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fonctionnaires;
