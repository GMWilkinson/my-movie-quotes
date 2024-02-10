import { Button, TextInput } from 'react-native'
import Card from '../../styled-components/Card'

import { QuoteData } from '../../App.interface'

interface FormProps {
  formValues: QuoteData
  handleFormChange: any
  hasUserName: boolean
  saveQuote: () => void
}

const Form = ({handleFormChange, saveQuote, formValues, hasUserName}: FormProps) => {
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
      {!hasUserName ? (
        <Card>
          <TextInput 
            placeholder="Username"
            value={formValues.createdBy}
            onChangeText={(value) => handleFormChange('createdBy', value)}
            style={{width: 200}}
          />
        </Card>
      ) : null}
      <Button title="Save" onPress={saveQuote} />
    </>
  )
}

export default Form