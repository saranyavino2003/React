import Button from "../Button"
import Img from "./Img"
import Mobile from "./Mobile"

export default function Card({src}) {
   return(
   <>
   <Mobile/>
   <Img src={src}/>
   <Button/>
      </>
   )
}
