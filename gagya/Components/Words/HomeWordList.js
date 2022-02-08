import { getData } from "../../lib/data";
import WordSummary from "./WordSummary";
import path from 'path';

export default function HomeWordList({filenames}) {
  console.log('data', filenames)
  return (
    <>
      <WordSummary />
    </>
  )
}

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'data');
  const filenames = await fs.readdir(directory);


  return { 
    props: { filenames }
  }
}