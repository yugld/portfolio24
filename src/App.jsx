import { useState } from 'react'

import './App.css'

import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {loading ? (
      <Preloader setLoading={setLoading} />
    ) : (
    <>
      <div className="w-full h-screen flex justify-center items-center overflow-hidden">
        <h1 className="text-3xl lg:text-5xl text-blackPreloading">
              Welcome
        </h1>
      </div>
    </>
    )}
    </>
  )
}

export default App
