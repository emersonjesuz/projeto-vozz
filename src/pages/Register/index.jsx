import styles from "./styles.module.scss";
import { useState } from "react";
import closeEye from "../../assets/icons/close-eye.svg";
import openEye from "../../assets/icons/open-eye.svg";


function Register() {
  const [error, setError] = useState("");
  const [ showPassword, setShowPassword] = useState(false)
  const [ name, setName ] = useState("");
  const [ email, SetEmail ] = useState("");
  const [ birtday, setBirtday ] = useState("");
  const [ password, setPassword ] = useState("");
  

const handleSubmit = (event) => {
    event.preventDefalt();

    if(!name || !email || !birtday || !password){
      setError("Todos os campos são obrigatórios");
    }
}

  return (
    <>
    <div className={styles.container}>
      <div className={styles["title"]}>
        <h1>Criar sua conta</h1>
        <span>Ao se inscrever, você concorda com nossos <a>Termos</a>, 
        a <a>Política de Privacidade</a> e o <a>Uso de Cookies</a>.</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles["form-register"]}>  
        <div className={styles["container-input"]}>       
          <label htmlFor='name'>Nome</label>
            <input
              name="name"
              placeholder='nome completo'
              type="text"
              value={name}
              onChange={(event)=> setName(event.target.value)}
            />
            </div>
        <div className={styles["container-input"]}> 
          <label htmlFor='email'>E-mail</label>
            <input
              name="email"
              placeholder='e-mail'
              type="text"
              value={email}
              onChange={(event)=> SetEmail(event.target.value)} 
            />    
            </div>      
        <div className={styles["container-input"]}>  
          <label htmlFor='birthday'>Data de Nascimento</label>
            <input 
              name="birtday"
              placeholder='DD/MM/AAAA'
              type="date"
              required aria-required="true"
              value={birtday}
         
              onChange={(event)=> setBirtday(event.target.value)}
            />   
        </div>
          <div className={styles["container-input"]}> 
            <label htmlFor='password'>Definir Senha</label>
              <input
                name="password"
                placeholder='insira aqui sua senha'
                required type={showPassword ? 'text' : 'password'}
                value={password}
                onFocus={(event) => (event.target.type = "password")}
                onBlur={(event) => (event.target.type = "null")}
                 onChange={(event)=> setPassword(event.target.value)}
                 />

                {error && <span className='mensage-error'>{error}</span>}

              <img className={styles["password-show"]} 
              src={showPassword ? closeEye : openEye}
              alt="mostrar senha"
              onClick={() => setShowPassword(!showPassword)} 
              />

          </div>
          <div className={styles["btn-register"]}>                  
            <button type="submit">Inscrever-se</button>
          </div>
        </div>

      </form>
      </div>
    </>
  )
}

export default Register;
