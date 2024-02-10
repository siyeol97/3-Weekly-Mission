import styled from 'styled-components';
import Card from './Card';
import { Links } from '../Folder/Folder';

interface Props {
  links: Links[];
  toggleModal?: () => void;
  updateModalName?: (name: string) => void;
  handleClickDeleteLink?: (url: string) => void;
}

export default function CardList({
  links,
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
}: Props) {
  return (
    <CardBox>
      {links.map((link) => (
        <Card
          key={link.id}
          link={link}
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          handleClickDeleteLink={handleClickDeleteLink}
        />
      ))}
    </CardBox>
  );
}

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 20px;

  @media (max-width: 1199px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px 24px;
    }
  }
  @media (max-width: 767px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;
