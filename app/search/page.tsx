'use client'
import { WrapperContainer } from "@/components/ui/search";
import { useSearchParams } from "next/navigation";

export default function SearchPage({ params }: { params: { q: string } }) {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

  return <WrapperContainer>{query}</WrapperContainer>;
}
