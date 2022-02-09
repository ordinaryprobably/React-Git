import Header from '../Components/Layout/Header'
import HomeWordList from '../Components/Words/HomeWordList'
import fs from 'fs'

export default function Home({ words }) {
  const { data } = JSON.parse(words);
  console.log(data)
  return (
    <>
      <Header />
      <HomeWordList words={data} />
    </>
  )
}

export async function getStaticProps() {
  const words = fs.readFileSync('data/data.json','utf8')

  return { 
    props: {
      words
    }
  }
}