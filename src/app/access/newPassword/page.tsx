import styles from "./styles.module.scss";

export default function NewPassword() {
  return (
    <div className={styles.container}>
      <h1>Defina uma nova senha</h1>
      <p>
        Você está quase recuperando a sua conta Vozzz! Para continuar, defina
        uma nova senha de 8 dígitos.
      </p>
      <form>
        <div>
          <label htmlFor="firt-password">Defina uma senha</label>
          <input
            id="firt-password"
            placeholder="pelo menos 8 dígitos"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="secod-password">Confirmar senha</label>
          <input
            id="secod-password"
            placeholder="confirme sua nova senha"
            type="password"
          />
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}
