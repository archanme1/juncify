export const headerLinks = [
  {
    label: "Home",
    forwardingRoute: "/",
  },
  {
    label: "Explore",
    forwardingRoute: "/events",
  },
  {
    label: "Create",
    forwardingRoute: "/events/create",
  },
  {
    label: "Profile",
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
