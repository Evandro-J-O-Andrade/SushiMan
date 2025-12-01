import Heros from "./Heros"; // Se você salvou como Heros.jsx

export default function Home() {
  return (
    <>
      {/* Agora o componente Hero cuida de tudo */}
      <Heros />

      {/* O resto da sua página vai aqui, como o Menu, Sobre, etc. */}
      {/* <MenuSection /> */}
      {/* <AboutSection /> */}
    </>
  );
}