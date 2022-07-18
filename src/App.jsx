import PersonCard from "./components/PersonCard";
import Header from "./components/Header";

function App() {
  const users = [
    { name: "Alex", idade: 18 },
    { name: "Vilson", idade: 25 },
    { name: "Wesley", idade: 20 },
  ];

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        {users.map((user, i) => (
          <PersonCard key={i} name={user.name} idade={user.idade} />
        ))}
      </div>
    </div>
  );
}

export default App;
