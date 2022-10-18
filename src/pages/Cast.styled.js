import styled from '@emotion/styled';

export const GalleryCast = styled.ul`
 display: flex;
  flex-wrap: wrap;
  padding: 20px 0 0 0;
  align-items: baseline;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
`;

export const Card = styled.li`
text-align: center;
width: calc((100% - 60px) / 6);
margin-right: 10px;
margin-bottom: 10px;
  list-style-type: none;
 &:nth-of-type(6n){
	margin-right: 0;
  }
  &:nth-last-of-type(-n+6){
	margin-bottom: 0;
  }
`;

export const Name = styled.p`
font-size: 15px;
margin: 5px 0 5px 0;
`;
export const Character = styled.p`
font-size: 10px;
`;