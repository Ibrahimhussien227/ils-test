import { useSelector } from "react-redux";

import { routeLoading, routeLoadingError } from "../selectors/routeSelector";
import Map from "./Map";
import Loader from "./Loader";

const Home = () => {
  const loading = useSelector(routeLoading);
  const loadingError = useSelector(routeLoadingError);

  if (loadingError) return <div>please retry...</div>;
  if (loading) return <Loader />;

  return <Map center={{ lat: 56.8673242, lng: 35.9374052 }} zoom={12} />;
};

export default Home;
