import CardLoader from "./CardLoader";

const Loading = () => {
  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </div>
  );
};

export default Loading;
