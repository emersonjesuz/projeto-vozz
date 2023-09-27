import styles from "./styles.module.scss";
import { useState } from "react";
import closeEye from "../../assets/icons/close-eye.svg";
import openEye from "../../assets/icons/open-eye.svg";
import errorIcon from "../../assets/icons/error-icon.svg";
import checkIcon from "../../assets/icons/check.svg";


function Register() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
  });
  const [ showPassword, setShowPassword] = useState(false);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ birthday, setBirthday ] = useState("");
  const [ password, setPassword ] = useState("");
  const [check, setCheck] = useState(checkIcon);


  const handleSubmit = (event) => {
    event.preventDefault();
      
      const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const newErrors = {};

      if(!name) {
        newErrors.name = "O nome é obrigatório";
      }
      
      if (!email) {
        newErrors.email = "O email é obrigatório";
      } else if (email.search(checkEmail) === -1) {
        newErrors.email = "Email inválido";
      }

      if (!birthday) {
        newErrors.birthday = "A data de nascimento é obrigatória";
      }

      
      if (!password) {
        newErrors.password = "Defina uma senha";
        setCheck(errorIcon); 
      } else if (password.length < 8) {
        newErrors.password = "A senha deve ter pelo menos 8 caracteres";
        setCheck(errorIcon); 
      } else { //logica do icone check
        newErrors.password = ""; 
        setCheck(checkIcon); 
      }
  

      setErrors(newErrors);

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
            <label htmlFor='name' 
            className={errors.name ? styles['error-label'] : ""}
            >Nome</label>

              <div className={`${styles["input-wrapper"]} ${
                errors.name ? styles["error-border"] : ""
              }`}>
                
              <input
                name="name"
                placeholder='nome completo'
                type="text"
                value={name}
                onChange={(event)=> setName(event.target.value)}
                
              />
               {errors.name && (
                <img
                  className={styles["error-icon"]}
                  src={errorIcon}
                  alt="Erro"
                />
              )}
            </div>
              {errors.name && (
              <span className={styles["message-error"]}>{errors.name}</span>
            )}
        
            <label htmlFor='email' className={errors.email ? styles["error-label"] : ""}>E-mail</label>
              <div
              className={`${styles["input-wrapper"]} ${
                errors.email ? styles["error-border"] : ""
              }`}
            >
              <input
                name="email"
                placeholder='e-mail'
                type="text"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
                className={errors.email ? styles["error-placeholder"] : ""} 
              />  
               {errors.email && (
                <img
                  className={styles["error-icon"]}
                  src={errorIcon}
                  alt="Erro"
                />
              )}
            </div>  
            {errors.email && (
              <span className={styles["message-error"]}>{errors.email}</span>
            )}       
          
            <label htmlFor='birthday' className={errors.birthday ? styles["error-label"] : ""}>Data de Nascimento</label>
              <div
                className={`${styles["input-wrapper"]} ${
                  errors.birthday ? styles["error-border"] : ""
                }`}
              >
              <input 
                name="birthday"
                placeholder='DD/MM/AAAA'
                type="date"
                value={birthday}
                onChange={(event)=> setBirthday(event.target.value)}
                
              /> 
               {errors.email && (
                <img
                  className={styles["error-icon"]}
                  src={errorIcon}
                  alt="Erro"
                />
              )}
            </div>    
              {errors.birthday && (
              <span className={styles["message-error"]}>{errors.birthday}</span>
            )}

          
              <label htmlFor='password' className={errors.password ? styles["error-label"] : ""}>Definir Senha</label>
              <div className={`${styles["input-wrapper"]} ${
                errors.password ? styles["error-border"] : ""
                }`}>
                <input
                  name="password"
                  placeholder='insira aqui sua senha'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event)=> setPassword(event.target.value)}
                  />
              <div className={styles["eyes"]}>
                  
                    <img className={styles["password-show"]} 
                    src={showPassword ? closeEye : openEye}
                    alt="mostrar senha"
                    onClick={() => setShowPassword(!showPassword)} 
                    
                    />
                    </div>
                     {errors.password && (
                       <img 
                       className={styles["error-icon"]}
                       src={check} 
                       alt="ok" />
                       
                       )}
            
            </div>
                       {errors.password && (
                         <span className={styles["message-error"]}>{errors.password}</span>
                 )}
          
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
