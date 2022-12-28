import axios from "axios";

const routeApi = {
  getRoute(routeObject) {
    const original = [...routeObject.original].reverse().join(",");
    const destination = [...routeObject.destination].reverse().join(",");
    return axios
      .get(
        `https://router.project-osrm.org/route/v1/driving/${original};${destination}?steps=true&geometries=geojson&overview=full`
      )
      .then((r) => r.data);
  },
};

export default routeApi;
