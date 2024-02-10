
import { useState } from 'react'
import styled from 'styled-components'
import { Text, View, FlatList, NativeSyntheticEvent, TextInputChangeEventData, Button } from 'react-native'

import { allQuotes } from './mock-data/allQuotes'
import QuoteCard from './components/QuoteCard'
import Form from './components/Form'
import { QuoteData } from './App.interface'

const Page = styled(View)`
  flex: 1;
  backgroundColor: #eee;
  alignItems: center;
  justifyContent: center;
  padding-vertical: 60px;
  padding-horizontal: 8px;
`

const Heading = styled(Text)`
  padding: 8px;
  font-size: 24px;
`

const App = () => {
  const [allCurrentQuotes, setAllCurrentQuotes] = useState<QuoteData[]>(allQuotes)
  const [showForm, setShowForm] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<QuoteData>({
    movie: '',
    quote: '',
    createdBy: '',
    upvotes: 0
  })

  const handleFormChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const saveQuote = () => {
    setAllCurrentQuotes([...allCurrentQuotes, formValues])
  }

  return (
    <Page>
      <Heading>My Favourite Movie Quotes</Heading>
      <Button title={`${showForm ? 'Close' : 'Open'} new quote form`} onPress={() => setShowForm(!showForm)} />
      {showForm ? (
        <Form formValues={formValues} handleFormChange={handleFormChange} saveQuote={saveQuote} />
      ) : null}
      <FlatList
        data={allCurrentQuotes}
        renderItem={({item}) => <QuoteCard quoteData={item} />}
        keyExtractor={item => item.quote}
      />
    </Page>
  )
}

export default App
