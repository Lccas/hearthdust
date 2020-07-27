import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/leonardocarvalho133/">
          Leonardo Carvalho
        </a>
        <a class="fa fa-github" href="https://www.linkedin.com/in/leonardocarvalho133/">
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
