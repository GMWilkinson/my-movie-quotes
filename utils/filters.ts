import { QuoteData } from "../App.interface"

export const filterByUser = (allQuotes: QuoteData[], userName: string) => {
  const getUserQuotes = allQuotes.filter((quoteData) => quoteData.createdBy === userName)
  return getUserQuotes
}