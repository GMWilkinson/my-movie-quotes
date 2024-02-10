import { Text, View } from 'react-native'
import Card from '../../styled-components/Card'
import Row from '../../styled-components/Row'

import { QuoteData } from '../../App.interface'

interface QuoteCardProps {
  quoteData: QuoteData
}

const QuoteCard = ({quoteData}: QuoteCardProps) => (
  <Card>
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