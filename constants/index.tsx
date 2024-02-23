export const headerLinks = [
  {
    label: "Home",
    forwardingRoute: "/",
  },
  {
    label: "Explore",
    forwardingRoute: "/junctions",
  },
  {
    label: "Create",
    forwardingRoute: "/junctions/create",
  },
  {
    label: "My Profile",
    forwardingRoute: "/profile",
  },
];

export const junctionDefaultValues = {
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
