import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Elton", "Bruna", "Maria", "Rinaldo", "Fran"]);

    const [users, setUsers] = useState([
        {id: 1, name: 'Elton', age: 20},
        {id: 2, name: 'Bruna', age: 21},
        {id: 3, name: 'Maria', age: 22},
        {id: 4, name: 'Rinaldo', age: 23},
        {id: 5, name: 'Fran', age: 24},
        {id: 6, name: 'William', age: 16}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 7);

        setUsers((prevUsers) =>
             prevUsers.filter((user) => randomNumber !== user.id)
    );
    };

  return (
    <div>
        {/* 4 - render sem key */}
        <u>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </u>
        {/* 5 - render com key */}
        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                    {user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/*  6 - previous state */}
        <button onClick={deleteRandom}> delete random user</button>
    </div>
  )
}

export default ListRender
