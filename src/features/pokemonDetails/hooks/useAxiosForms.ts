import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponseForms, Species } from '../models';

const useAxiosForm = (forms: Species[]) => {
  // update: change for useReducer
  const [response, setResponse] = useState<ResponseForms[] | null>(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchMultiplesForms = async (): Promise<void> => {
    const requests = forms.map((form) => axios.get(`${form.url}`));
    await Promise.allSettled(requests)
      .then((response) => {
        const fulfilled = response.filter((result: any) => result.status === 'fulfilled');
        const data = fulfilled.map((result: any) => result.value.data);
        setResponse(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchMultiplesForms();
  }, [forms]);
  return { response, error, loading };
};

export default useAxiosForm;
