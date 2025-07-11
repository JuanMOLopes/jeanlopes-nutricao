import "./Cards.css";

import Card from "../../components/Card/Card";
import CtaButton from "../../components/CtaButton/CtaButton";

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="cards-container">
          <Card
            image="/jean-card1.webp"
            text="Acompanhamento nutricional"
            icon="calendar_today"
          />
          <Card
            image="/jean-card2.webp"
            text="Plano alimentar"
            icon="menu_book"
          />
          <Card
            image="/jean-card3.webp"
            text="Reeducação alimentar"
            icon="school"
          />
        </div>

        <div className="cta-center">
            <CtaButton />
        </div>
      </div>
    </>
  );
}

export default Cards;
