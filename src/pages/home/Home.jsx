import './home.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Laptop from '../../components/laptop/Laptop'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/socialCard/Card'
import Gallery from '../../components/gallery/Gallery'
import Partners from '../../components/partners/Partners'

export const Home = () => {
  return (
    <>
        {/* <Parallax pages={4}>
        <ParallaxLayer></ParallaxLayer>
        </Parallax> */}
        {/* <Navbar /> */}
        <Hero />
        <Laptop />
    </>
  )
}
