import React, { useState } from 'react';
import ActivePetCard from './pet-card/ActivePetCard';
import InactivePetCard from './pet-card/InactivePetCard';

import { __Flex } from '../styles/__Utils';

const PetCard = (props) => {
  const [active, setActive] = useState(false);
  const { image, name, age, gender, breed, size, video, desc, contact } = props;
  return active ? (
    <__Flex row>
      <ActivePetCard
        image={image}
        name={name}
        age={age}
        gender={gender}
        breed={breed}
        size={size}
        video={video}
        desc={desc}
        contact={contact}
        active={active}
        setActive={setActive}
      ></ActivePetCard>
    </__Flex>
  ) : (
    <__Flex row>
      <InactivePetCard
        image={image}
        name={name}
        active={active}
        setActive={setActive}
      ></InactivePetCard>
    </__Flex>
  );
};

export default PetCard;
