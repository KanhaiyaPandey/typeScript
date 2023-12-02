


                         /*  types are usefull in union and ors */
import { Circle } from "../../../node_modules/@mui/icons-material/index"

 


interface circle {
    radius : number

}

interface rectangle {
    length : number
    width: number

}
interface square {
    length : number
}

type shape = circle | rectangle | square ;

function render (shape: shape){
    console.log("renderd");
    
}

render({
    length: 10,
    width: 5,
    radius: 10,
})




