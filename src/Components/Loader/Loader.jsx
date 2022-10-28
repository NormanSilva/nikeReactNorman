import "./Loader.css"
import ItemLoading from "./ItemLoading"


const Loader = () => {

    const cardLoading = []
    for( let i = 1; i <= 1; i++ ){
        cardLoading.push(<ItemLoading key={i}/>)
    }

  return (
    <div className="container Loader">{cardLoading}</div>
  )
}

export default Loader