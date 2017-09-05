import React from 'react';
import styled from 'styled-components';

const ArtistStyles = styled.div`
  width: 30%;
  box-shadow: 1px 1px 5px black;
  img{
    max-height: 200px;
  }
`;

const ArtistCard = (props) => {
  const artist = props.artist;
  return(
<ArtistStyles>
  <img src={artist.photo_url} alt={artist.name} />
  <h3>{artist.name} </h3>
</ArtistStyles>
)
};

export default ArtistCard;
