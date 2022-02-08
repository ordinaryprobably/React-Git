import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Layout/Header'
import HomeWordList from '../Components/Words/HomeWordList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <HomeWordList />
    </>
  )
}
