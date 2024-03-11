import React from 'react';
import { Person, people } from './data';
import { getImageUrl } from './utils';
import './App.css'
const List: React.FC = () => {
    const listItems = people.map((person: Person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));

    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    );
};

export default List;


