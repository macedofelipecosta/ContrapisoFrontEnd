"use client";

import React, { useEffect, useState } from "react";
import api from "../components/api"; // Importa la configuración de Axios

const ArtistasPage = () => {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtistas = async () => {
      try {
        const response = await api.get("/getArtistas"); // Usa Axios para la solicitud
        setArtistas(response.data); // Configura los datos recibidos
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtistas();
  }, []);

  if (isLoading) {
    return <p>Cargando artistas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Artistas</h1>
      <ul className="list-disc pl-5">
        {artistas.map((artista: any) => (
          <li key={artista.artistaId} className="mb-2">
            <h2 className="text-lg font-semibold">{artista.nombre}</h2>
            {artista.biografia && <p>Biografía: {artista.biografia}</p>}
            {artista.generoMusical && <p>Género: {artista.generoMusical}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistasPage;
