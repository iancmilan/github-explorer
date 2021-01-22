import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/47834980?s=460&u=94ba91d3e064aff196c5020c9c898e91a0a796e1&v=4"
            alt="Ian Carlos Milan"
          />
          <div>
            <strong>iancmilan/happy</strong>
            <p>
              Projeto desenvolvido durante a #NextLevelWeek da @Rocketseat
              utilizando as tecnologias React, React Native e Node.js.
            </p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
