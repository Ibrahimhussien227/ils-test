// import { delay } from "../utils";

const requests = [
  {
    key: "0",
    original: [59.84660399, 30.29496392],
    destination: [59.82934196, 30.42423701],
    name: "1",
  },
  {
    key: "1",
    original: [59.82934196, 30.42423701],
    destination: [59.82761295, 30.41705607],
    name: "2",
  },
  {
    key: "2",
    original: [59.83567701, 30.38064206],
    destination: [59.84660399, 30.29496392],
    name: "3",
  },
  {
    key: "3",
    original: [59.84660399, 30.29496392],
    destination: [59.82761295, 30.41705607],
    name: "4",
  },
  {
    key: "4",
    original: [59.83567701, 30.38064206],
    destination: [59.84660399, 30.29496392],
    name: "5",
  },
];

const requestListApi = {
  async getAll() {
    // await delay(1000);
    return requests;
  },
};

export default requestListApi;
