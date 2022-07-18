import "./style.css";

const PersonCard = ({ name, idade }) => {
  return (
    <div className="UserCard">
      <span>
        <p className="userName">Olá, {name}</p>
        <p>Sua idade é {idade} anos.</p>
      </span>
    </div>
  );
};
export default PersonCard;
