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
    label: "Contact",
    forwardingRoute: "/contact",
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

export const contactDefaultValues = {
  username: "",
  email: "",
  message: "",
};
