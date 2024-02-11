import CardList from '../Card/CardList';
import { Links } from './Folder';

interface Props {
  links: Links[];
  toggleModal: () => void;
  updateModalName: (name: string) => void;
  handleClickDeleteLink: (url: string) => void;
  searchInputValue: string;
}

export default function FolderCardList({
  links,
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
  searchInputValue,
}: Props) {
  return (
    <CardList
      links={links}
      toggleModal={toggleModal}
      updateModalName={updateModalName}
      handleClickDeleteLink={handleClickDeleteLink}
      searchInputValue={searchInputValue}
    />
  );
}
