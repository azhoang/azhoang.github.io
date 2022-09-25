import React from "react";

interface IProps {
  refetch: any;
}

export default function useRequest(props: IProps) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  const refetch = async () => {
    setLoading(true);
    try {
      const result = await props.refetch();
      setData(result);
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
