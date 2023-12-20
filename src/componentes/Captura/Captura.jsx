import styled from "styled-components"
import BtnIcon from "../BtnIcon/BtnIcon"
import Camera from 'react-html5-camera-photo';
import { useState } from "react"

const Container = styled.div`
  img {
    margin: 32px auto;
    max-width: 100%;
  }
  video {
    max-width: 100%;
  }
`

const Captura = ({ aoObterImagem }) => {

  const [estaCapturando, setEstaCapturando] = useState(false)
  const [fotoSrc, setFotoSrc] = useState('/reconhecimento-facial.png')

  const aoCapturarImagem = (imagemCodificada) => {
    setEstaCapturando(false)
    setFotoSrc(imagemCodificada)
    aoObterImagem(imagemCodificada)
  }

  const lidarComErroDaCamera = (erro) => {
    if (erro.message == 'Permission denied') {
      console.log('ops, algo deu errado')
      debugger
    }
  }


  return (<Container>
    <p>Clique no quadro abaixo para capturarmos uma imagem sua!</p>
    {!estaCapturando && <BtnIcon onClick={() => setEstaCapturando(true)} type="button">
      <img src={fotoSrc} alt="" />
    </BtnIcon>}
    {estaCapturando && <Camera onTakePhoto={aoCapturarImagem} onCameraError={lidarComErroDaCamera} />}

  </Container>)
}

export default Captura