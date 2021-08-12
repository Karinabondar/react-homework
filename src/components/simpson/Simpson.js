export default function Simpsons({name, surname, age, info, photo}) {

    let classNameTitle = 'simpsons'
  return (
      <div className={classNameTitle}>
          <h2>{name} {surname}</h2>
          <h3> Age - {age} </h3>
          <p>{info}</p>
          <img src={photo} alt=""/>
          <hr/>
      </div>
  );
}