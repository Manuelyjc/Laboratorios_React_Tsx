import React from 'react';

interface Props {
    year: number;
}

const Copyright: React.FC<Props> = ({ year }) => {
    return <p className='small'>©️ {year}</p>;
};

export default Copyright;
