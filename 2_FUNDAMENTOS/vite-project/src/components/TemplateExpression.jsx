// 4 - tempalte expression

const Templateexpression = () => {
    const name = "Elton";

    const data = {
        age:49,
        job: "Programador"
    }
    return (
        <div>
            <p>A soma é { 2 + 2 }</p>
            <h3>Bem vindo {name}</h3>
            <p>Sua idade é {data.age} sua profissão é {data.job}.</p>
        </div>
    )
}

export default Templateexpression;