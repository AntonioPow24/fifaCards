
import '../Style/card.css'


export default function Card({name,age,pos,img,team,logoteam}) {
  return (
    <div className="card">
        
        <div className="presentationCard">
            <div className="data-presentation">
                <span className="age" >{age}</span>
                <span className="pos" >{pos}</span>
                <div className="teamContainer">
                <img className="team" src={logoteam} alt="" />
                </div>
                
            </div>
            
            {/* <div className="img-presentation">
                <img src={img} alt="" />
            </div> */}
        </div>
        <div className="dateCard">
            <p>{name}</p>
            <p>{team}</p>
        </div>
        <img className='imgplayer' src={img} alt="" />
    </div>
  )
}