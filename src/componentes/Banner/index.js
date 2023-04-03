
import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá mundo</h1>

            <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Davi Marques, estudante de Análise e Desenvolvimento de Sistemas e esse é primeiro projeto usando rotas com React :)</p>
        </div>

        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
            <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do davi"/>
        </div>
    </div>
  )
}

export default Banner