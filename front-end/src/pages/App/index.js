import React, { Component } from 'react'

import api from '../../services/api'

import UploadContainer from '../../components/UploadContainer'
import Button from '../../components/Button'
import ResultList from '../../components/ResultList'

import { Container, Disclaimer } from './styles'

// This is the main component of the app itself. The app class is where all the logic of uploading
// the archives, making the request to the back-end and receiving its response is made.
export default class App extends Component {

  // All the necessary state variables to dynamically change what is shown to the user
  state = {
    // The reference to the main document for Term Frequency
    document: null,
    // The reference to the stop words document for Term Frequency
    stopWords: null,
    // The percentage of the upload of both files
    progress: 0,
    // The result of the request made to the backend
    result: null,
  }

  // The method responsible for receiving the reference to the document file and put it in the
  // correct state variable.
  handleDocumentSelection = files => {
    const selectedFile = files[0]
    this.setState({
      document: selectedFile,
      stopWords: this.state.stopWords,
      progress: this.state.progress,
      result: this.state.result,
    })
    console.log(this.state)
  }

  // The method responsible for receiving the reference to the stop words file and put it in the
  // correct state variable.
  handleStopWordsSelection = files => {
    const selectedFile = files[0]
    this.setState({
      document: this.state.document,
      stopWords: selectedFile,
      progress: this.state.progress,
      result: this.state.result,
    })
    console.log(this.state)
  }

  // Resets the app to its initial state.
  resetState = () => {
    this.setState({
      document: null,
      stopWords: null,
      progress: 0,
      result: null,
    })
  }

  // This is the method responsible for uploading the files, sending it to the back-end, catch any
  // existing error, and receive the results.
  sendFiles = () => {
    const data = new FormData();
    data.append('documentFile', this.state.document, this.state.document.name)
    if(!!this.state.stopWords){
      data.append('stopWordsFile', this.state.stopWords, this.state.stopWords.name)
    }
    console.log(data)
    // Makes a request to the back-end with the /tf address.
    api.post('/tf', data, {
      // Called everytime there is a progress in the upload.
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
      // When a response is received from the backend, we set its state so it can be shown to the
      // user.
      this.setState({
        document: this.state.document,
        stopWords: this.state.stopWords,
        progress: this.state.progress,
        result: response.data,
      })
    }).catch(error => {
      // When an error is received from the backend, we set its state so it can be shown to the
      // user, and give the option to try again.
      this.setState({
        document: null,
        stopWords: null,
        progress: 0,
        result: 'error',
      })
      console.log('Error on upload files')
      console.log(error)
    })
  }
  
  // This is where everything shown in the screen is rendered.
  render() {
    // If there is an error
    if (this.state.result === 'error') {
      return (
        <Container>
          <h1>Tivemos um problema</h1>
          <Button 
                text='Tentar novamente'
                isBig={true}
                backgroundColor='#ddd'
                handleClick={this.resetState}
              />
        </Container>
      )
    }
    // If there is a result
    else if (this.state.result !== null) {
      return (
        <Container>
          <ResultList resultDictionary={this.state.result} />
          <Button 
              text='Escolher outros arquivos'
              isBig={true}
              backgroundColor='#ddd'
              handleClick={this.resetState}
            />
        </Container>
      )
    }
    // If the app is waiting for response
    else if (this.state.progress !== 0) {
      return(
        <Container>
          <h1>Carregando...</h1>
        </Container>
      )
    }
    // If the app is in its initial state
    return (
      <>
        <Container>
          <Disclaimer>*Apenas documentos em português ou em inglês serão processados corretamente.</Disclaimer>
          <UploadContainer
            onUpload={this.handleDocumentSelection}
            selectedFile={this.state.document}
            description={<p>Arraste e solte seu <strong>documento (.txt)</strong></p>}
            subDescription='ou'
            buttonText='Selecione o arquivo'
            background='#404D3E'
            buttonColor='#BADDB4'
          />
          <UploadContainer 
            onUpload={this.handleStopWordsSelection}
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