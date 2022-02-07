import Link from "next/link"

export default function Navbar() {
  const styles = {
    display: 'flex',
    background: 'lightblue',
    justifyContent: 'space-between',
    padding: '15px'
  }
  return (
    <div style={styles}>
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/about'>
        <a>about</a>
      </Link>
      <Link href='/contact'>
        <a>contact</a>
      </Link>
    </div>
  )
}