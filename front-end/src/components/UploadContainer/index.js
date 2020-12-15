import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import Button from '../Button'
import { Container, Description, SubDescription } from './styles'

// The component responsible for handling file selection via file-prompt or drag and drop.
// Based on the following video: https://www.youtube.com/watch?v=G5UZmvkLWSQ
export default class UploadContainer extends Component {

  // Displays a message if a file is being dragged.
  renderDragMessage = (isDragActive, selectedFile) => {
    if (!isDragActive) {
      return (
        <>
          <Description>{this.props.description}</Description>
          <SubDescription>{this.props.subDescription}</SubDescription>
          <Button text={this.props.buttonText} backgroundColor={this.props.buttonColor}/>
          {!!selectedFile ? <SubDescription>Arquivo selecionado: {selectedFile.name}</SubDescription> : ''}
        </>
      )
    }
    return <Description>Solte o arquivo aqui.</Description>
  }

  // This is where everything shown by this component is rendered.
  render() {
    const { onUpload } = this.props

    return(
      // Dropzone is a component from the React-Dropzone library witch makes handling drag and drop
      // files a lot easier.
      <Dropzone accept='text/plain' onDropAccepted={onUpload}>
        {({getRootProps, getInputProps, isDragActive}) => (
          <Container
            background={this.props.background}
            {...getRootProps()}
            isDragActive={isDragActive}
            >
            <input {...getInputProps()}/>
            <img src='/uploadIcon.png' alt='Upload Icon' />
            {this.renderDragMessage(isDragActive, this.props.selectedFile)}
          </Container>
        )}
      </Dropzone>
    )
  }
}