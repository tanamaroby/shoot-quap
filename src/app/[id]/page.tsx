"use client";
import Title from "@/components/Title";
import { SHOOT_CARD_MOCK } from "@/mocks/shoot-cards.mocks";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export interface ShootIdPageProps {
  params: {
    id: string;
  };
}

export default function ShootIdPage(props: ShootIdPageProps) {
  const { params } = props;
  const { id } = params;
  const cardContent = SHOOT_CARD_MOCK.filter((mock) => mock.id === id).find(
    Boolean,
  );
  if (!cardContent) {
    toast.error("Unable to find character, please refresh!", {
      id: "UNABLE_TO_FIND",
    });
    return redirect("/");
  }
  const { id: cardId, imageUrl, title, description, tags } = cardContent;
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row gap-x-6">
        <img
          src={imageUrl}
          alt={imageUrl}
          className="w-[200px] rounded-lg border-2 border-slate-500"
        />
        <div className="flex flex-col items-start justify-start gap-y-2">
          <Title text={title} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
