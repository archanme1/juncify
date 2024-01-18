export const headerLinks = [
  {
    label: "Home",
    forwardingRoute: "/",
  },
  {
    label: "Create Junction",
    forwardingRoute: "/events/create",
  },
  {
    label: "My Profile",
    forwardingRoute: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
