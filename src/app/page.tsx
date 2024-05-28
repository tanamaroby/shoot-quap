import Container from "@/components/Container";
import ShootCard from "@/components/ShootCard";
import Title from "@/components/Title";
import { SHOOT_CARD_MOCK } from "@/mocks/shoot-cards.mocks";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <Container className="gap-y-4">
        <Title text="Confirmed Shoots" />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
          {SHOOT_CARD_MOCK.map((mock) => {
            return (
              <ShootCard
                key={mock.id}
                id={mock.id}
                title={mock.title}
                description={mock.description}
                imageUrl={mock.imageUrl}
                tags={[]}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
