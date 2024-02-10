import { QuoteData } from "../App.interface";

export const sortByVotesBestToWorst = (allQuotes: QuoteData[]): QuoteData[] => {
  const sortedByVotes = allQuotes.sort((a, b) => b.upvotes - a.upvotes)
  return sortedByVotes
}

export const sortByVotesWorstToBest = (allQuotes: QuoteData[]): QuoteData[] => {
  const sortedByVotes = allQuotes.sort((a, b) => a.upvotes - b.upvotes)
  return sortedByVotes
}

export const sortByNewestToOldest = (allQuotes: QuoteData[]): QuoteData[] => {
  const sortedByDate = allQuotes.sort((a, b) => a.timestamp - b.timestamp)
  return sortedByDate
}

export const sortByOldestToNewest = (allQuotes: QuoteData[]): QuoteData[] => {
  const sortedByDate = allQuotes.sort((a, b) => b.timestamp - a.timestamp)
  return sortedByDate
}