import styles from './styles.module.scss';
import Illustration1 from '../../assets/onboarding/ilustra-01.svg';
import Illustration2 from '../../assets/onboarding/ilustra-02.svg';
import Illustration3 from '../../assets/onboarding/ilustra-03.svg';
import Logo from '../../assets/onboarding/logo-icon.svg';
import BtnForward from '../../assets/onboarding/btn-forward.svg';
import BtnReturn from '../../assets/onboarding/btn-return.svg';
import BtnReturnGray from '../../assets/header/arrow-left-gray.svg';
import ElipseTrue from '../../assets/onboarding/elipse1.svg';
import ElipseFalse from '../../assets/onboarding/elipse2.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const screen1 = {
    image: Illustration1,
    title: 'Uma rede de pessoas cidadãs conectadas pela opinião',
    span: 'Aqui cada voz importa e acreditamos na força da união para promover mudanças positivas. Juntos, engajamos em debates construtivos e buscamos a transformação. Compartilhe suas ideias, conecte-se com outros membros e participe ativamente.',
    elipse1: ElipseTrue,
    elipse2: ElipseFalse,
    elipse3: ElipseFalse,
}
const screen2 = {
    image: Illustration2,
    title: 'Reconhecimento da sua participação no mundo real e virtual',
    span: 'No Vozzz, a participação pode gerar resultado. Saiba mais sobre as principais pautas políticas do momento, opine e apoie efetivamente as causas de seu interesse, através de votações, fóruns, enquetes e consultas públicas.',
    elipse1: ElipseFalse,
    elipse2: ElipseTrue,
    elipse3: ElipseFalse,
}
const screen3 = {
    image: Illustration3,
    title: 'Aprender e falar sobre política pode ser leve e descomplicado',
    span: 'Acreditamos na importância da política em nossas vidas e tornamos o assunto menos complexo. Na nossa comunidade, todos(as) são bem-vindos(as) para aprender, questionar e contribuir. Aprenda sobre política se divertindo com a gente.',
    elipse1: ElipseFalse,
    elipse2: ElipseFalse,
    elipse3: ElipseTrue,
}
const screen4 = {
    image: Logo,
    title: 'O seu lugar de fala está esperando por você',
    span: 'Junte-se a nós e compartilhe suas ideias!',
}

export default function Onboarding() {
    const navigate = useNavigate();

    const [screen, setScreen] = useState(screen1)

    function forwardScreen(event) {
        event.preventDefault();

        switch (screen) {
            case screen1:
                setScreen(screen2)
                break;
            case screen2:
                setScreen(screen3)
                break;
            case screen3:
                setScreen(screen4)
                break;
            default:
                break;
        }
    }
    function returnScreen(event) {
        event.preventDefault();

        switch (screen) {
            case screen4:
                setScreen(screen3)
                break;
            case screen3:
                setScreen(screen2)
                break;
            case screen2:
                setScreen(screen1)
                break;
            default:
                break;
        }
    }
    function navigateToSingIn(event) {
        event.preventDefault();
        navigate('/access/sign-in')
    }
    function navigateToSingUp(event) {
        event.preventDefault();
        navigate('/access/sign-up')
    }

    return (
        <div className={styles.container_page}>
            <div className={styles.up}>
                <img src={screen.image} alt="image"
                    className={`${screen === screen4 ? styles['image_logo'] : ""}`}
                />
                {screen === screen4 ?
                    <img src={BtnReturnGray}
                        alt='return' className={styles['return_']}
                        onClick={returnScreen}
                    />
                    : null
                }
            </div>
            <div className={styles.down}>
                <h1 className={styles['content-title']}>
                    {screen.title}
                </h1>
                <span className={styles['content-span']}>
                    {screen.span}
                </span>
                {
                    screen !== screen4 ?
                        <footer className={styles['footer']}>
                            {screen !== screen1 ?
                                <button className={styles.btn_return} onClick={returnScreen}>
                                    <img src={BtnReturn} alt='btn-return' />
                                </button>
                                : null
                            }
                            <div className={styles['progress']}>
                                <img src={screen.elipse1} className={styles['elipse']} />
                                <img src={screen.elipse2} className={styles['elipse']} />
                                <img src={screen.elipse3} className={styles['elipse']} />
                            </div>
                            <button className={styles.btn_forward} onClick={forwardScreen}>
                                <img src={BtnForward} alt='btn-forward' />
                            </button>
                        </footer>
                        :
                        <div className={styles['buttons']}>
                            <button onClick={navigateToSingUp}>Criar uma Conta</button>
                            <button className='button-white-border-blue' onClick={navigateToSingIn}>Entrar</button>
                            <a href="">Talvez mais tarde</a>
                        </div>
                }
            </div>
        </div>
    )
}