import React, { Component } from 'react'

import api from '../../services/api'

import UploadContainer from '../../components/UploadContainer'
import Button from '../../components/Button'
import ResultList from '../../components/ResultList'

import { Container, Disclaimer } from './styles'

export default class App extends Component {

  state = {
    document: null,
    stopWords: null,
    progress: 0,
    result: null,
  }

  handleDocumentUpload = files => {
    const selectedFile = files[0]
    this.setState({
      document: selectedFile,
      stopWords: this.state.stopWords,
      progress: this.state.progress,
      result: this.state.result,
    })
    console.log(this.state)
  }

  handleStopWordsUpload = files => {
    const selectedFile = files[0]
    this.setState({
      document: this.state.document,
      stopWords: selectedFile,
      progress: this.state.progress,
      result: this.state.result,
    })
    console.log(this.state)
  }

  sendFiles = () => {
    const data = new FormData();
    data.append('documentFile', this.state.document, this.state.document.name)
    if(!!this.state.stopWords){
      data.append('stopWordsFile', this.state.stopWords, this.state.stopWords.name)
    }
    console.log(data)
    api.post('/tf', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total))
        this.setState({
          document: this.state.document,
          stopWords: this.state.stopWords,
          progress: progress,
        })
      }
    }).then(response => {
      console.log(response)
      // Aqui vai entrar a lógica de exibir o resultado
      this.setState({
        document: this.state.document,
        stopWords: this.state.stopWords,
        progress: this.state.progress,
        result: response.dict,
      })
    }).catch(() => {
      console.log('Error on upload files')
    })
  }
  
  render() {
    if(this.state.result !== null) {
      return (
        <Container>
          <ResultList resultDictionary={this.state.result} />
        </Container>
      )
    } else {
      return (
        <>
          <Container>
            <Disclaimer>*Apenas documentos em português ou em inglês serão processados corretamente.</Disclaimer>
            <UploadContainer
              onUpload={this.handleDocumentUpload}
              selectedFile={this.state.document}
              description={<p>Arraste e solte seu <strong>documento (.txt)</strong></p>}
              subDescription='ou'
              buttonText='Selecione o arquivo'
              background='#404D3E'
              buttonColor='#BADDB4'
            />
            <UploadContainer 
              onUpload={this.handleStopWordsUpload}
              selectedFile={this.state.stopWords}
              description={<p>Arraste e solte seu arquivo de <strong>stop-words (.txt)</strong></p>}
              subDescription='ou'
              buttonText='Selecione o arquivo'
              background='#4D3E3E'
              buttonColor='#DDB4B4'
            />
            <Button 
              text='Calcular'
              isBig={true}
              backgroundColor='#ddd'
              disabled = {!this.state.document}
              handleClick={this.sendFiles}
            />
          </Container>
        </>
      )
    }
  }
}