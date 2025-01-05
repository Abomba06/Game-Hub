import useData from "./useData";

const usePlatform = () => {
  interface Platform {
    id: 0;
    name: string;
    slug: string;
  }

  return useData<Platform>("/platforms/lists/parents");
};

export default usePlatform;
