import { MouseEvent } from 'react';
import styled from 'styled-components';
import addFolderIcon from '/public/addfolder.svg';
import addFolderWhiteIcon from '/public/addfolderwhite.svg';

interface Props {
  toggleModal: () => void;
  updateModalName: (id: string) => void;
}

export default function AddFolder({ toggleModal, updateModalName }: Props) {
  const handleAddFolderClick = (e: MouseEvent<HTMLDivElement>) => {
    toggleModal();
    updateModalName(e.currentTarget.id);
  };
  return (
    <Wrapper id="addFolder" onClick={handleAddFolderClick}>
      <Text>폴더 추가</Text>
      <Icon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 80px;
  height: 20px;
`;
const Text = styled.span`
  cursor: pointer;
  color: #6d6afe;
  @media (max-width: 767px) {
    & {
      color: #e7effb;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  background-image: url(${addFolderIcon.src});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 767px) {
    background-image: url(${addFolderWhiteIcon.src});
  }
`;
