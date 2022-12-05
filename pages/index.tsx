import HeroSection from '../app/components/All Home/herosection'
import Popularate from '../app/components/All Home/Popularate'
import Homecetagory from "../app/components/All Home/Homecetagory"
import ProductTopSever from "../app/components/All Home/ProductTopSever"
import ProductSymple from '../app/components/All Home/ProductSymple'
import Producttodaytwo from '../app/components/All Home/Producttodaytwo'
export default function Home() {
  return (
    <div>

      < HeroSection />
      <Homecetagory />
      <Producttodaytwo/>
      <Popularate />
      <ProductTopSever/>
      <ProductSymple/>


    </div>
  )
}
