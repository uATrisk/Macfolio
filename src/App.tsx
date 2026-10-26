import { Navbar, Welcome, Dock, Desktop, Preloader } from '#components/index'
import { Draggable } from 'gsap/all'
import { Terminal, Safari, Resume, Finder, TxtFile, ImgFile, Contact, Photos } from '#windows/index'
import gsap from 'gsap'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { withBase } from '#utils/path'


gsap.registerPlugin(Draggable)


const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.backgroundImage = `url("${withBase('/images/wallpaper-custom-2.jpg')}")`;
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <Welcome />
      <Desktop />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TxtFile />
      <ImgFile />
      <Contact />
      <Photos />
    </>
  )
}

export default App
