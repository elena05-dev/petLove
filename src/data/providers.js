import providerDog from "../assets/images/image_dog_dect.webp";

export const providers = [
  {
    id: "provider-1",
    name: "Анна — выгул собак",
    city: "afula",
    serviceType: "walking",
    petType: "dog",
    description: "Индивидуальные прогулки и внимание к привычкам питомца.",
    image: providerDog,
    verified: false,
  },
  {
    id: "provider-2",
    name: "Домашняя передержка",
    city: "afula",
    serviceType: "boarding",
    petType: "dog",
    description: "Домашняя обстановка и предварительное знакомство с питомцем.",
    image: "/images/provider-boarding.jpg",
    verified: false,
  },
  {
    id: "provider-3",
    name: "Уход за кошками",
    city: "afula",
    serviceType: "special-care",
    petType: "cat",
    description: "Спокойный уход с учётом привычек и потребностей кошки.",
    image: "/images/provider-cat.jpg",
    verified: false,
  },
];
