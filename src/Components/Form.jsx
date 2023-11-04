import { useForm } from "react-hook-form";
import axios from 'axios'
import '../Style/form.css'
import { useState } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
//   const [post,setPost]=useState({
//     namePlayer:'', agePlayer:'',teamPlayer:'',posPlayer:'',imgteam:'',imgPlayer:''
//   })
  const handleInput = (event) => {
        setPost({...post,[event.target.name]:event.target.value})
  }




  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Datos Enviados!!");
    reset();
    
    axios.post('https://player-api-render.onrender.com/api/v1/player',data)
    .then(response=> console.log(response))
    .catch(err => console.log(err))


  })

  

  

  return (
    <div className="formContainer">
        <h2>Ingrese Jugador</h2>
      <form className="form" onSubmit={onSubmit}>



        {/* NOMBRE DEL JUGADOR */}
        <div className="inputContainer">
          <label className="label" htmlFor="namePlayer">
            Nombre
          </label>
          <input
            name="namePlayer"
            
            onChange={handleInput}
            
            className="input"
            type="text"
            {...register("namePlayer", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: {
                value: 20,
                message: "Solo se permite 13 caracteres",
              },
            })}
          />

          {errors.namePlayer && <span>{errors.namePlayer.message}</span>}
        </div>



        {/* EDAD DEL JUGADOR */}
        <div className="inputContainer">
          <label className="label" htmlFor="age">
            Edad
          </label>
          <input
            name="age"
            
            onChange={handleInput}
            

            className="input"
            type="number"
            {...register("age", {
              required: {
                value: true,
                message: "Edad es requerida",
              },
              maxLength: {
                value: 2,
                message: "Solo se permite 2 caracteres",
              },
              minLength: {
                value: 2,
                message: "No se puede establecer 1 digito",
              },
              validate: (value) => {
                const edad = value;
                if (edad < 17 || edad > 40) {
                  return `${edad} no es edad de un jugador`;
                }
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>


        {/* EQUIPO DEL JUGADOR */}
        <div className="inputContainer">
          <label className="label" htmlFor="team">
            Equipo
          </label>
          <input
            name="teamPlayer"
            
            onChange={handleInput}
            

            className="input"
            type="text"
            {...register("team", {
              required: {
                value: true,
                message: "Equipo es requerido",
              },
              maxLength: {
                value: 18,
                message: "Solo se permite 18 caracteres",
              },
            })}
          />
          {errors.team && <span>{errors.team.message}</span>}
        </div>


        {/* POSICION DEL JUGADOR] */}
        <div className="inputContainer">
          <label className="label" htmlFor="position">
            Posicion
          </label>
          <select 
            name="position"
            
            onChange={handleInput}

            
            {...register("position")} className="select">
            <option value="DC">Delantero Central</option>
            <option value="DFC">Defensa Central</option>
            <option value="EXD">Extremo Der</option>
            <option value="EXI">Extremo Izq</option>
            <option value="MC">Medio Campista</option>
            <option value="MI">Medio Izq</option>
            <option value="MD">Medio Der</option>
          </select>
        </div>

        

        {/* FOTO DEL JUGADOR */}
        <div className="inputContainer">
          <label className="label" htmlFor="urlImage">
            UrlFoto
          </label>
          <input
          name="urlImage"
           
          onChange={handleInput} 
          

          className="input"
            type="text"
            {...register("urlImage", {
              required: {
                value: true,
                message: "UrlFoto es requerido",
              },
            })}
          />
          {errors.urlImage && <span>{errors.urlImage.message}</span>}
        </div>


        {/* FOTO DEL EQUIPO */}
        <div className="inputContainer">
          <label className="label" htmlFor="logoTeam">
            UrlEquipo
          </label>
          <input 
            name="logoTeam"
            
            onChange={handleInput}

            className="input"
            type="text"
            {...register("logoTeam", {
              required: {
                value: true,
                message: "UrlEquipo es requerido",
              },
            })}
          />
          {errors.logoTeam && <span>{errors.logoTeam.message}</span>}
        </div>

        <button className="submit">Crear Cartilla</button>

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
        
  );
}
