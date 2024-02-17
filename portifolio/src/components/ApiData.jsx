import { useState, useEffect } from 'react';
import './ApiData.css'

function ApiData() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/MateusProDev/repos');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar repositórios: ${response.status}`);
                }
                const data = await response.json();
                const filteredRepos = data.filter(repo =>
                    repo.name === 'barbearia_samuel_abreu' || 
                    repo.name === 'Agencia-corrida-Jc' ||
                    repo.name === 'Previsao-Meteorologica' ||
                    repo.name === 'my_portifolio'
                );
                setRepos(filteredRepos);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className='projetosGitHub'>
            <h1>Meus Repositórios Selecionados no GitHub</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <h2><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
                        <p>Data de Criação: {new Date(repo.created_at).toLocaleDateString()}</p>
                        <p>Linguagem: {repo.language}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApiData;
