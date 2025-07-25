import "./Bio.css";
import CtaButton from "../../components/CtaButton/CtaButton";

function Bio() {
  return (
    <>
      <section class="bio" id="bio">
        <div class="bio-image">
          <img src="/jean-bio.webp" loading="lazy" alt="Jean Lopes Formação" />
        </div>

        <div class="bio-content">
          <h2>Sobre mim</h2>
          <p>
            Sou nutricionista formado pela UNICAMP, com foco em nutrição clínica
            voltada à qualidade de vida. Atendo de forma presencial e online,
            com um cuidado sempre individualizado.
          </p>
          <p>
            Minha abordagem é humanizada, baseada em ciência e livre de dietas
            restritivas. Acredito que a nutrição deve respeitar o tempo, as
            necessidades e os desejos de cada pessoa — celebrando cada conquista
            no caminho para uma vida mais saudável.
          </p>
          <p>
            Ofereço diferenciais como planos alimentares flexíveis, suporte via
            WhatsApp e um aplicativo exclusivo para facilitar a rotina
            alimentar.
          </p>
          <p>
            Escolhi a nutrição por paixão, porque acredito no poder dos alimentos em
            transformar vidas e promover bem-estar
          </p>
          <CtaButton />
        </div>
      </section>
    </>
  );
}

export default Bio;
