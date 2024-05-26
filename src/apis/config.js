import { useState } from "react";
import axios from "axios";
import APIS from ".";

const baseModule = axios.create({ baseURL: "https://dummyjson.com" });

const useAPI = (api) => {
  const [loading, toggleLoading] = useState(false);

  async function fetch_function(body) {
    try {
      toggleLoading(true);
      const res = await api(body);
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      toggleLoading(false);
    }
  }

  return [fetch_function, loading];
};

export { APIS, useAPI, baseModule };
