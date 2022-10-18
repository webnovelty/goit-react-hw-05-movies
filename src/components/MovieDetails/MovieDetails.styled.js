import styled from '@emotion/styled';

export const Img = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 30%;
`;

export const Film = styled.div`

  display: flex;
  flex-direction: row;
  gap: 20px;

  background-color: #fff;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid black;


`;

export const FilmContent = styled.div`
display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilmTitle = styled.h2`
  font-weight: 800;
  font-size: 50px;
  line-height: 1.15;

  color: #000;
  text-transform: uppercase;
`;

export const FilmInfo = styled.ul`
display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FilmInfoItem = styled.li`
display: flex;
  gap: 40px;
`;
export const FilmInfoLabel = styled.p`
 width: 70px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;

  color: #aa2222b0;
`;

export const FilmInfoText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;

  color: #000;
`;
export const FilmDescription = styled.div`
display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FilmDescriptionTitle = styled.h3`

  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;

  color: #000;
  text-transform: uppercase;
`;

export const FilmDescriptionText = styled.p`

	font-weight: 500;
	font-size: 12px;
	line-height: 1.6;`;

export const Additional = styled.ul`
display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid black;
`;

export const AdditionalTitle = styled.h3`

  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;

  color: #000;
  text-transform: uppercase;
  padding-top: 20px;
`;