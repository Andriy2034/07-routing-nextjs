import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";
import NotesClient from "./Notes.client";

const PER_PAGE = 12;
const tags: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

interface FilteredNotesPageProps {
  params: Promise<{ slug: string[] }>;
}

function getNoteTag(slug: string[]): NoteTag | undefined {
  const currentTag = slug[0];

  if (currentTag === "all") {
    return undefined;
  }

  return tags.find((tag) => tag === currentTag);
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const { slug } = await params;
  const tag = getNoteTag(slug);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
        search: "",
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}