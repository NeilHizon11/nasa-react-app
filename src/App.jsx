import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/SideBar"
import { useState } from "react"
import { useEffect } from "react"


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isFullHeight, setisFullHeight] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  const toggleHeight = () => {
    setisFullHeight(!isFullHeight)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log('DATA\n', apiData)
      } catch (err) {
        console.log(err.message)
      }
    } 
    fetchAPIData()
  },[] )

  return (
    <>
      {data ? (<Main  isFullHeight={isFullHeight} data={data} />): (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )} 
      {showModal && (
      <Sidebar data={data} toggleHeight={toggleHeight} handleToggleModal={handleToggleModal} />
        )}
      {data && (<Footer data={data} toggleHeight={toggleHeight} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App
