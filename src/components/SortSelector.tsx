import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOption: (sortOption: string) => void;
}

const SortSelector = ({ onSelectSortOption }: Props) => {
  const sortOptions = [
    { value: "popularity.desc", label: "Popularity" },
    { value: "vote_average.desc", label: "Rating" },
    { value: "primary_release_date.desc", label: "Release Date (Newest)" },
    { value: "primary_release_date.asc", label: "Release Date (Oldest)" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            onClick={() => onSelectSortOption(option.value)}
            key={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
