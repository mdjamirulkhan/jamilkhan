import { Tabs } from "@mantine/core"
import Addintionalinfo from "./productContent/Addintionalinfo"
import Description from "./productContent/Description"
import Review from "./productContent/Review"
import { AiOutlineHome,AiOutlineInfoCircle } from 'react-icons/ai';
import {MdReviews} from 'react-icons/md'
const Productdraft = () => {
  return (
    <div className="p-4 flex"> 
        <Tabs color='blue' variant="pills"  orientation="vertical" defaultValue="gallery">
    <Tabs.List >
      <Tabs.Tab  value="Description" icon={<AiOutlineHome size={15}/>} > Description</Tabs.Tab>
      <Tabs.Tab value="Addintionalinfo" icon ={<AiOutlineInfoCircle size={15}/> } >Addintionalinfo</Tabs.Tab>
      <Tabs.Tab value="Review" icon={<MdReviews size={15}/>}> Review</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="Description" pl="xs">
    <Description/>
    </Tabs.Panel>

    <Tabs.Panel value="Addintionalinfo" pl="xs">
      <Addintionalinfo/>
    </Tabs.Panel>

    <Tabs.Panel value="Review" pl="xs">
      <Review/>
    </Tabs.Panel>
  </Tabs></div>
  )
}

export default Productdraft