import WordSummary from "./WordSummary";

export default function HomeWordList({ words }) {
  const wordList = [];

  for(let word of words) {
    for(let wordInfo of word.info) {
      wordList.push(<WordSummary word={wordInfo} />)
    }
  }

  wordList.sort(() => Math.random() - 0.5);

  return (
    <>
      {wordList}
    </>
  )
}
