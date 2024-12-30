import Header from "./Header";
import Login from "./Login";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <Login />
      </main>
    </div>
  );
};

export default Body;
