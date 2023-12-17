"use client";
import { FormEvent, useEffect, useState } from "react";
import { SearchInput } from "../ui/search/search";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery("");
    if (searchQuery) {
      router.push(`/search?q=${searchQuery}`);
    }else{
      router.push(`/`);
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
