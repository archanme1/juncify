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
  cityId: "",
  price: "",
  isFree: false,
  url: "",
};

export const contactDefaultValues = {
  username: "",
  email: "",
  message: "",
};
