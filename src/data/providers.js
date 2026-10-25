import providerDog from "../assets/images/image_dog_dect.webp";

export const providers = [
  {
    id: "provider-1",
    isDemo: true,
    name: "Анна — выгул собак",
    city: "7700",
    serviceType: "walking",
    petType: "dog",
    description: "Индивидуальные прогулки и внимание к привычкам питомца.",
    image: providerDog,
    verified: false,
  },
  {
    id: "provider-2",
    isDemo: true,
    name: "Домашняя передержка",
    city: "7700",
    serviceType: "boarding",
    petType: "dog",
    description: "Домашняя обстановка и предварительное знакомство с питомцем.",
    image: "/images/provider-boarding.jpg",
    verified: false,
  },
  {
    id: "provider-3",
    isDemo: true,
    name: "Уход за кошками",
    city: "7700",
    serviceType: "special-care",
    petType: "cat",
    description: "Спокойный уход с учётом привычек и потребностей кошки.",
    image: "/images/provider-cat.jpg",
    verified: false,
  },
];
