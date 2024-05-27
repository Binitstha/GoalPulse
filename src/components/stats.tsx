import statsData from "@/lib/stats";

const stats = async () => {
  const data = await statsData();
  console.log(data)
  return (
    <>
      <p>TOP SCORRER</p>
      {data}
    </>
  );
};
export default stats;
