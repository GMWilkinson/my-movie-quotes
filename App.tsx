
import { useState } from 'react'
import styled from 'styled-components'
import { Text, View, FlatList, Button } from 'react-native'

import { allQuotes } from './mock-data/allQuotes'
import QuoteCard from './components/QuoteCard'
import Form from './components/Form'
import Heading from './styled-components/Heading'
import { QuoteData } from './App.interface'
import { sortByVotesBestToWorst, sortByVotesWorstToBest, sortByNewestToOldest, sortByOldestToNewest } from './utils/sorters'
import { filterByUser } from './utils/filters'
import Card from './styled-components/Card'

const Page = styled(View)`
  flex: 1;
  backgroundColor: #eee;
  alignItems: center;
  justifyContent: center;
  padding-vertical: 60px;
  padding-horizontal: 8px;
`

const App = () => {
  const [allCurrentQuotes, setAllCurrentQuotes] = useState<QuoteData[]>(sortByVotesBestToWorst(allQuotes))
  const [showForm, setShowForm] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [showMyQuotes, setShowMyQuotes] = useState<boolean>(false)
  const [userName, setUserName] = useState<string | null>(null)
  const [showSorters, setShowSorters] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<QuoteData>({
    movie: '',
    quote: '',
    createdBy: userName ? userName : '',
    upvotes: 0,
    timestamp: 0
  })

  const handleFormChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const currentUserQuotes = filterByUser(allCurrentQuotes, userName)

  const saveQuote = () => {
    const doesQuoteAlreadyExist = allCurrentQuotes.find(
      (quoteData) => formValues.quote.toLowerCase() === quoteData.quote.toLowerCase())
    if (doesQuoteAlreadyExist != null) {
      setShowMessage(true)
      return
    }
    setUserName(formValues.createdBy)
    setShowForm(false)
    setAllCurrentQuotes([...allCurrentQuotes, {...formValues, timestamp: new Date().getMilliseconds()}])
    setFormValues({
      movie: '',
      quote: '',
      createdBy: formValues.createdBy,
      upvotes: 0,
      timestamp: 0
    })
  }

  console.log('flonk', allCurrentQuotes)

  return (
    <Page>
      <Heading>My Favourite Movie Quotes</Heading>
      <Button 
        title={`${showForm ? 'Close' : 'Open'} new quote form`} 
        onPress={() => setShowForm(!showForm)} 
      />
      {showMessage ? <Text>Quote already exists</Text> : null}
      {showForm ? (
        <Form 
          formValues={formValues} 
          handleFormChange={handleFormChange} 
          saveQuote={saveQuote} 
          hasUserName={userName != null} 
        />
      ) : null}
      <Button 
        title={`${showSorters ? 'Close' : 'Open'} sorters`} 
        onPress={() => setShowSorters(!showSorters)} 
      />
      {showSorters ? (
        <Card>
          <Button title="Sort by: most votes" onPress={() => setAllCurrentQuotes(sortByVotesBestToWorst([...allCurrentQuotes]))} />
          <Button title="Sort by: least votes" onPress={() => setAllCurrentQuotes(sortByVotesWorstToBest([...allCurrentQuotes]))} />
          <Button title="Sort by: newest" onPress={() => setAllCurrentQuotes(sortByNewestToOldest([...allCurrentQuotes]))} />
          <Button title="Sort by: oldest" onPress={() => setAllCurrentQuotes(sortByOldestToNewest([...allCurrentQuotes]))} />
        </Card>
      ) : null}
      <Button 
        title={`${showMyQuotes ? 'Show all' : 'Show my'} quotes`} 
        onPress={() => setShowMyQuotes(!showMyQuotes)} 
      />
      {showMyQuotes ? (
        <FlatList
          data={currentUserQuotes}
          renderItem={({item}) => <QuoteCard quoteData={item} />}
          keyExtractor={item => item.quote}
        />
      ) : (
        <FlatList
          data={allCurrentQuotes}
          renderItem={({item}) => <QuoteCard quoteData={item} />}
          keyExtractor={item => item.quote}
        />
      )}
    </Page>
  )
}

export default App
