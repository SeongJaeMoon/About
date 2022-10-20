import React from 'react';
import { 
  useCollectionOnce
} from 'react-firebase-hooks/firestore';

const useFirestoreLoadMore = queryFn => {
  const [query, setQuery] = React.useState(null);
  const [last, setLast] = React.useState(null);
  const [data, setData] = React.useState([]);

  const [qData, loading, error] = useCollectionOnce(query);

  React.useEffect(() => {
    setData([]);
    setQuery(queryFn());
  
  }, [queryFn]);

  React.useEffect(() => {
    if (qData && qData.query.isEqual(query)) {
      setLast(qData.docs[qData.docs.length - 1]);
      setData([...data, ...qData.docs]);
    }
  }, [qData]);

  const more = React.useCallback(() => {
    setQuery(queryFn().startAfter(last));
  }, [queryFn, setQuery, last]);

  return {data, loading, error, more};
//   return [[data, loading, error], more];
}

export default useFirestoreLoadMore;