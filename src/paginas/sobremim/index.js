import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpeg"
import styles from "./SobreMim.module.css"

const SobreMim = () => {
  return (
      <main>
        <PostModelo 
        fotoCapa={fotoCapa}
        titulo="Sobre Mim"
        >
          <h3 className={styles.subtitulo}>
              Olá, eu sou o Davi!
          </h3>

          <img
          src={fotoSobreMim}
          className={styles.fotoSobreMim}
          alt='Foto do Davi'
          ></img>

          <p>Quis enim eiusmod incididunt commodo veniam anim mollit culpa. Dolore irure ea tempor sit. Irure occaecat veniam Lorem enim in eiusmod. Consequat magna anim cupidatat ipsum velit nisi laboris laborum elit ut in fugiat. Anim laborum velit elit esse officia tempor sint amet ex.
          </p>

          <p>Quis enim eiusmod incididunt commodo veniam anim mollit culpa. Dolore irure ea tempor sit. Irure occaecat veniam Lorem enim in eiusmod. Consequat magna anim cupidatat ipsum velit nisi laboris laborum elit ut in fugiat. Anim laborum velit elit esse officia tempor sint amet ex.
          </p>

          <p>Quis enim eiusmod incididunt commodo veniam anim mollit culpa. Dolore irure ea tempor sit. Irure occaecat veniam Lorem enim in eiusmod. Consequat magna anim cupidatat ipsum velit nisi laboris laborum elit ut in fugiat. Anim laborum velit elit esse officia tempor sint amet ex.
          </p>

          <p>Quis enim eiusmod incididunt commodo veniam anim mollit culpa. Dolore irure ea tempor sit. Irure occaecat veniam Lorem enim in eiusmod. Consequat magna anim cupidatat ipsum velit nisi laboris laborum elit ut in fugiat. Anim laborum velit elit esse officia tempor sint amet ex.
          </p>

          <p>Quis enim eiusmod incididunt commodo veniam anim mollit culpa. Dolore irure ea tempor sit. Irure occaecat veniam Lorem enim in eiusmod. Consequat magna anim cupidatat ipsum velit nisi laboris laborum elit ut in fugiat. Anim laborum velit elit esse officia tempor sint amet ex.
          </p>
        </PostModelo>
    
      </main>
 
  )
}

export default SobreMim