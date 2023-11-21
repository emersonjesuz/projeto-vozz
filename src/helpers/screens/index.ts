import Illustration1 from "../../assets/onboarding/ilustra-01.svg";
import Illustration2 from "../../assets/onboarding/ilustra-02.svg";
import Illustration3 from "../../assets/onboarding/ilustra-03.svg";
import Logo from "../../assets/onboarding/Logo-icon.svg";
import ElipseTrue from "../../assets/onboarding/elipse1.svg";
import ElipseFalse from "../../assets/onboarding/elipse2.svg";

export const screens = {
  screen1: {
    image: Illustration1,
    title: "Uma rede de pessoas cidadãs conectadas pela opinião",
    span: "Aqui cada voz importa e acreditamos na força da união para promover mudanças positivas. Juntos, engajamos em debates construtivos e buscamos a transformação. Compartilhe suas ideias, conecte-se com outros membros e participe ativamente.",
    elipse1: ElipseTrue,
    elipse2: ElipseFalse,
    elipse3: ElipseFalse,
  },
  screen2: {
    image: Illustration2,
    title: "Reconhecimento da sua participação no mundo real e virtual",
    span: "No Vozzz, a participação pode gerar resultado. Saiba mais sobre as principais pautas políticas do momento, opine e apoie efetivamente as causas de seu interesse, através de votações, fóruns, enquetes e consultas públicas.",
    elipse1: ElipseFalse,
    elipse2: ElipseTrue,
    elipse3: ElipseFalse,
  },
  screen3: {
    image: Illustration3,
    title: "Aprender e falar sobre política pode ser leve e descomplicado",
    span: "Acreditamos na importância da política em nossas vidas e tornamos o assunto menos complexo. Na nossa comunidade, todos(as) são bem-vindos(as) para aprender, questionar e contribuir. Aprenda sobre política se divertindo com a gente.",
    elipse1: ElipseFalse,
    elipse2: ElipseFalse,
    elipse3: ElipseTrue,
  },
  screen4: {
    image: Logo,
    title: "O seu lugar de fala está esperando por você",
    span: "Junte-se a nós e compartilhe suas ideias!",
  },
};
