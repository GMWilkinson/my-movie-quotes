
import { useState } from 'react'
import styled from 'styled-components'
import { Text, View, FlatList,  } from 'react-native'

import { allQuotes } from './mock-data/allQuotes'
import QuoteCard from './components/QuoteCard'

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
  const [allCurrentQuotes, setAllCurrentQuotes] = useState(allQuotes)
  return (
    <Page>
      <Heading>My Favourite Movie Quotes</Heading>
      <FlatList
        data={allCurrentQuotes}
        renderItem={({item}) => <QuoteCard quoteData={item} />}
        keyExtractor={item => item.quote}
      />
    </Page>
  )
}

export default App
