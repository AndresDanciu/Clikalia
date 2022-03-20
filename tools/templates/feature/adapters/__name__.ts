import { Endpoint__name__, __name__ } from '../models';

export const createAdapted__name__ = (user: Endpoint__name__) => {
  const formatted__name__: __name__ = {
    name: user.name,
    lastName: user.last_name,
  };
  return formatted__name__;
};
