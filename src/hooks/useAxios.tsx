import axios, { AxiosRequestConfig } from "axios";
import React from "react";

interface IProps {
  config: AxiosRequestConfig<any>;
}

export default function useAxios(props: IProps) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();
  const [errors, setErrors] = React.useState<any>();

  const refetch = async () => {
    setLoading(true);
    try {
      const result = await axios(props.config);
      setData(result.data);
    } catch (error) {
      setErrors(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    data,
    errors,
    refetch,
  };
}
