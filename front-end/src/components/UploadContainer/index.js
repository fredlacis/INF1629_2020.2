import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import Button from '../Button'
import { Container, Description, SubDescription } from './styles'

//https://www.youtube.com/watch?v=G5UZmvkLWSQ
export default class UploadContainer extends Component {

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

  render() {
    const { onUpload } = this.props

    return(
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