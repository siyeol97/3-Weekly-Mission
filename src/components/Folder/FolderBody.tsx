import styled from 'styled-components';
import NoLinkCard from '../Card/NoLinkCard';
import SearchBar from '../SearchBar/SearchBar';
import { FolderList, Links } from './Folder';
import FolderContent from './FolderContent';

export interface Props {
  toggleModal: () => void;
  updateModalName: (name: string) => void;
  links: Links[];
  folderList: FolderList[];
  folderId: number;
  folderName: string;
  handleClickTitle: (item: FolderList) => void;
  handleClickDeleteLink: (url: string) => void;
  searchInputValue: string;
  updateSearchInputValue: (value: string) => void;
}

export default function FolderBody({
  toggleModal,
  updateModalName,
  links,
  folderList,
  folderId,
  folderName,
  handleClickTitle,
  handleClickDeleteLink,
  searchInputValue,
  updateSearchInputValue,
}: Props) {
  return (
    <Wrapper>
      <SearchBar
        searchInputValue={searchInputValue}
        updateSearchInputValue={updateSearchInputValue}
      />
      {links.length === 0 && folderList.length === 0 ? (
        <NoLinkCard />
      ) : (
        <FolderContent
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          links={links}
          folderList={folderList}
          folderId={folderId}
          folderName={folderName}
          handleClickTitle={handleClickTitle}
          handleClickDeleteLink={handleClickDeleteLink}
          searchInputValue={searchInputValue}
        />
      )}
      {links.length === 0 && folderList.length !== 0 ? <NoLinkCard /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
