// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== JUNCTION PARAMS
export type CreateJunctionParams = {
  userId: string;
  junction: {
    title: string;
    description: string;
    location?: string;
    available: string;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    categoryId: string;
    cityId: string;
    price: string;
    isFree: boolean;
    url: string;
  };
  path: string;
};

export type UpdateJunctionParams = {
  userId: string;
  junction: {
    _id: string;
    title: string;
    imageUrl: string;
    description: string;
    location?: string;
    startDateTime: Date;
    endDateTime: Date;
    categoryId: string;
    price: string;
    isFree: boolean;
    url: string;
  };
  path: string;
};

export type DeleteJunctionParams = {
  junctionId: string;
  path: string;
};

export type GetAllJunctionsParams = {
  query: string;
  category: string;
  city: string;
  limit: number;
  page: number;
};

export type GetJunctionsByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};

export type GetRelatedJunctionsByCategoryParams = {
  categoryId: string;
  junctionId: string;
  limit?: number;
  page: number | string;
};

export type Junction = {
  _id: string;
  title: string;
  description: string;
  price: string;
  isFree: boolean;
  imageUrl: string;
  location: string;
  available: string;
  startDateTime: Date;
  endDateTime: Date;
  url: string;
  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  category: {
    _id: string;
    name: string;
  };
};

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string;
};

// ====== CITY PARAMS
export type CreateCityParams = {
  cityName: string;
};

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  junctionTitle: string;
  junctionId: string;
  price: string;
  isFree: boolean;
  buyerId: string;
};

export type CreateOrderParams = {
  stripeId: string;
  junctionId: string;
  buyerId: string;
  totalAmount: string;
  createdAt: Date;
};

export type GetOrdersByJunctionParams = {
  junctionId: string;
  searchString: string;
};

export type GetOrdersByUserParams = {
  userId: string | null;
  limit?: number;
  page: string | number | null;
};

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
