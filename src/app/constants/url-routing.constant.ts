import { environment } from '@env/environment';

export const ServerUrl = {
  authentication: {
    authenticateUrl: () => `${environment.API_GATEWAY}/authenticate`
  },
  bookStore: {
    getByPage: () => `${environment.API_GATEWAY}/bookstore/`,
    addBook: () => `${environment.API_GATEWAY}/bookstore/`,
    getById: (id: string) => `${environment.API_GATEWAY}/bookstore/${id}`
  },
  shopCart: {
    checkout: () => `${environment.API_GATEWAY}/shopping-cart/`
  },
  user: {
    getProfileByUserId: (id: string) =>
      `${environment.API_GATEWAY}/user/${id}/profile`,
    addUserUrl: () => `${environment.API_GATEWAY}/users`
  }
};

export const HttpCodeValues = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502
};

export const RoutingUrl = {
  bookstore: {
    bookListUrl: () => `/book-store`
  },
  cart: {
    cartUrl: () => `/cart`
  },
  loginUrl: () => '/login',
  registerUrl: () => '/register'
};
