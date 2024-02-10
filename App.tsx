
import { useState } from 'react'
import styled from 'styled-components'
import { Text, View, FlatList } from 'react-native'

import { allQuotes } from './mock-data/allQuotes'

const Page = styled(View)`
  flex: 1;
  backgroundColor: #eee;
  alignItems: center;
  justifyContent: center;
  padding-vertical: 60px;
  padding-horizontal: 16px;
`

const Heading = styled(Text)`
  padding: 8px;
  font-size: 24px;
`

const Card = styled(View)`
  font-size: 18px;
  border-radius: 8px;
  backgroundColor: #fff;
  padding: 16px;
  margin-vertical: 8px;
`

const Item = ({quote}) => (
  <Card>
    <Text>{quote}</Text>
  </Card>
)

const App = () => {
  const [allCurrentQuotes, setAllCurrentQuotes] = useState(allQuotes)
  return (
    <Page>
      <Heading>My Favourite Movie Quotes</Heading>
      <FlatList
        data={allCurrentQuotes}
        renderItem={({item}) => <Item quote={item.quote} />}
        keyExtractor={item => item.quote}
      />
    </Page>
  )
}

export default App
