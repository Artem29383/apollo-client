import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { POST_MOVIE } from '../../graphql/mutation';

const Form = styled.div`
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  height: 300px;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
`;

const AddMovie = ({ data }) => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [postMovie, { loading }] = useMutation(POST_MOVIE, {
    variables: { input: { name, genre, directorLogin: data.login } }
  });
  
  const nameHandler = e => {
    setName(e.currentTarget.value);
  };
  
  const genreHandler = e => {
    setGenre(e.currentTarget.value);
  };
  
  
  const submit = async () => {
    try {
      const movie = await postMovie();
      console.log(movie);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Form>
      <input value={name} onChange={nameHandler} type="text" placeholder='Название' />
      <input value={genre} onChange={genreHandler} type="text" placeholder='Жанр' />
      <button onClick={submit} disabled={loading}>Submit</button>
    </Form>
  )
};

export default AddMovie;