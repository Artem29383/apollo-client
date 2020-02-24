import React from 'react';
import T from '../Table.styled';

const DirectorsPage = () => {
  return (
    <T.Table>
      <thead>
      <tr>
        <T.Th>Name</T.Th>
        <T.Th>Age</T.Th>
        <T.Th>Movies</T.Th>
      </tr>
      </thead>
      <tbody>
      <T.Tr>
        <T.ThBody>Blizzard</T.ThBody>
        <T.ThBody>20</T.ThBody>
        <T.ThBody>Warcraft</T.ThBody>
      </T.Tr>
      </tbody>
    </T.Table>
  )
};

export default DirectorsPage;