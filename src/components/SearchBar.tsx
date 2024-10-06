import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState<string>("");

  // Debounce: Appelle onSearch avec une pause de 300ms après chaque modification de query
  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-3/4 rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        placeholder="Search for a movie..."
      />
    </div>
  );
};

export default SearchBar;
