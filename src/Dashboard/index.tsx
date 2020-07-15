import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import api from '../services/api';
import { Repositories, Header, Title } from './styles';


interface Repository {
  name: string;
  full_name: string;
  description: string;
  language: string;
  html_url: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
   api.get<Repository[]>('/repos').then(({ data }) => {
     setRepositories(data);
   })
  }, []);

  return (
    <>
      <Header>
        <img src="https://avatars3.githubusercontent.com/u/50703288?v=4" alt="Avatar do usuário" /> 
        <div>
          <div>
            <strong>Kayo Francisco Silva Bezerra</strong>
            <p>Desenvolvedor Java e Angular</p>
          </div>
          <section>
            <a href="https://github.com/kayofrancisco">
              <FaGithub size={36} title="Github" color="purple"/>
            </a>
            <a href="https://www.linkedin.com/in/kayo-francisco-51a816166/">
              <FaLinkedin size={36} title="LinkedIn" color="blue"/>
            </a>
          </section>
        </div>
      </Header>
      <Title>Meus projetos</Title>
      <Repositories>
        {repositories.map(({full_name, name, description, language, html_url}) => (
          <a key={full_name} href={html_url}>
            <div>
              <strong>{name}</strong>
              <span>{language}</span>
              <p>{description}</p>
            </div>
          </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;