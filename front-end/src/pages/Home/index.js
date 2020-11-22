import React, { Component } from 'react'

import { GlobalStyles } from "../../styles/GlobalStyles"
import Header from '../../components/Header'
import UploadContainer from '../../components/UploadContainer'

import { Container, Disclaimer } from './styles';
import Button from '../../components/Button';

export default class Home extends Component {

  state = {
    document: undefined,
    stopWords: undefined,
  }

  documentErrorMessage = ''
  stopWordsErrorMessage = ''

  handleDocumentUpload = file => {
    if(file.length > 1) {
      this.documentErrorMessage = 'Arraste e solte apenas um arquivo (.txt)'
    } else {
      this.setState({
        document: file,
        stopWords: this.state.stopWords,
        errorMessage: ''
      })
  }
    console.log(this.state)
  }

  handleStopWordsUpload = file => {
    this.setState({
      document: this.state.document,
      stopWords: file,
      errorMessage: ''
    })
    console.log(this.state)
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
        <Disclaimer>*Apenas documentos em português ou em inglês serão processados corretamente.</Disclaimer>
        <UploadContainer
          onUpload={this.handleDocumentUpload}
          errorMessage={this.documentErrorMessage}
          description={<p>Arraste e solte seu <strong>documento (.txt)</strong></p>}
          subDescription='ou'
          buttonText='Selecione o arquivo'
          background='#404D3E'
          buttonColor='#BADDB4'
        />
        <UploadContainer 
          onUpload={this.handleStopWordsUpload}
          errorMessage={this.stopWordsErrorMessage}
          description={<p>Arraste e solte seu arquivo de <strong>stop-words (.txt)</strong></p>}
          subDescription='ou'
          buttonText='Selecione o arquivo'
          background='#4D3E3E'
          buttonColor='#DDB4B4'
        />
        <Button text='Calcular' isBig={true} backgroundColor='#ddd'/>
        </Container>
        <GlobalStyles />
      </>
    )
  }
}