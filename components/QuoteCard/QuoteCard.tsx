import { Text, View } from 'react-native'
import Card from '../../styled-components/Card'
import Row from '../../styled-components/Row'

import { QuoteData } from '../../App.interface'

interface QuoteCardProps {
  quoteData: QuoteData
  updateVote: (quote: string) => void
}

const QuoteCard = ({quoteData, updateVote}: QuoteCardProps) => (
  <Card onPress={() => updateVote(quoteData.quote)}>
    <Row>
      <View>
        <Text>Movie: {quoteData.movie}</Text>
        <Text>User: {quoteData.createdBy}</Text>
        <Text>Quote: {quoteData.quote}</Text>
      </View>
      <Text>Votes: {quoteData.upvotes}</Text>
    </Row>
  </Card>
)

export default QuoteCard