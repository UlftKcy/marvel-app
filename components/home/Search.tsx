"use client";
import {
  FormEvent,
  useState,
} from "react";
import { SearchInput } from "../ui/search/search";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery("");
    if (searchQuery) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="search"
        placeholder="Search character..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
