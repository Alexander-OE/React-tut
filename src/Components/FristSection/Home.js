import Card from "./Card";

const Home = ({item}) => {
  console.log(item);
  return (
    <Card>
      <div>
        <h3>{item}</h3>
      </div>
    </Card>
  );
};

export default Home;
