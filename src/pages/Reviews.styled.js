import styled from '@emotion/styled';

export const GalleryCast = styled.ul`
  padding: 20px 0 0 0;
 
`;

export const Card = styled.li`

margin-bottom: 40px;
&:last-of-type{
	margin-right: 0;
  }

  box-shadow: 0 0 0 1px silver,
0 -20px 0 -10px coral,
20px 0 0 -10px darkturquoise,
0 20px 0 -10px gold,
-20px 0 0 -10px green;
`;

export const Name = styled.p`
font-size: 25px;
padding: 5px;
display: flex;
align-items: center;
color: #5996E4;
`;
export const Character = styled.p`
font-size: 15px;
padding: 5px;

`;

export const Bad = styled.div`
text-align: center;
color: red;
margin-bottom: 50px;
`;