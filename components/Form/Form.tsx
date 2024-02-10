import { Button, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import Card from '../../styled-components/Card'
import Row from '../../styled-components/Row'

import { QuoteData } from '../../App.interface'
import { useState, SetStateAction } from 'react'

interface FormProps {
  formValues: QuoteData
  handleFormChange: any
  saveQuote: () => void
}

const Form = ({handleFormChange, saveQuote, formValues}: FormProps) => {
  return (
    <>
      <Card>
        <TextInput 
          placeholder="Movie"
          value={formValues.movie}
          onChangeText={(value) => handleFormChange('movie', value)}
          style={{width: 200}}
        />
      </Card>
      <Card>
        <TextInput 
          placeholder="Quote"
          value={formValues.quote}
          onChangeText={(value) => handleFormChange('quote', value)}
          style={{width: 200}}
        />
      </Card>
      <Card>
        <TextInput 
          placeholder="Username"
          value={formValues.createdBy}
          onChangeText={(value) => handleFormChange('createdBy', value)}
          style={{width: 200}}
        />
      </Card>
      <Button title="Save" onPress={saveQuote} />
    </>
  )
}

export default Form