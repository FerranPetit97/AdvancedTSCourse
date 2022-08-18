export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const petitUser: User = {
  username: 'Ferran Petit',
  role: ROLES.ADMIN,
};
