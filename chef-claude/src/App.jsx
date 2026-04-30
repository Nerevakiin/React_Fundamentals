import React from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default function App() {
  
  const [data, setData] = React.useState("")

  React.useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setData(data.message))
  }, [data])
  
  
  return (
    <>
      <Header />
      <div>{data || "Loading...."}</div>
      <Main />
    </>
  )
}