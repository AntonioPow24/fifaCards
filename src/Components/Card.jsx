
import '../Style/card.css'


export default function Card({name,age,pos,img,team}) {
  return (
    <div className="card">
        <img src={img} alt="" />
        <div className="presentationCard">
            <div className="data-presentation">
                <span className="age" >{age}</span>
                <span className="pos" >{pos}</span>
            </div>
            
            {/* <div className="img-presentation">
                <img src={img} alt="" />
            </div> */}
        </div>
        <div className="dateCard">
            <p>{name}</p>
            <p>{team}</p>
        </div>
    </div>
  )
}