import { useState, useEffect } from "react";

import { Movies } from "../interfaces/Movies";

import axios from 'axios';

export const useFetchFilm = (type: string) => {

    const [movies, setMovies] = useState<Movies[] | undefined>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        const apiKey = "9facf82df66c552848ccedc8a5ec2e6d";

        async function getMovies() {
            if(cancelled||type!== "MOVIES") return;

            const url = `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${apiKey}`;

            setLoading(true);

            try {

                const res = await axios.get(url);

                setMovies(res.data.results.map((movie: Movies) => ({
                    id: movie.id,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                })));

                setLoading(false);

                return movies;
            } catch (error) {
                console.error(error);

                setError("Erro ao fazer requisição");

                setLoading(false);
            } finally {
                setLoading(false);
            }

        }

        getMovies()

    }, [type, movies, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    })

    return { movies, loading, error };
}