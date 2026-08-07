import axios from "axios";
import type { CreateNoteParams, Note } from "@/types/note";

const noteHubApi = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
  tag?: string;
}

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}


export async function fetchNotes({
  page,
  perPage,
  search = "",
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const { data } = await noteHubApi.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, tag, search },
  });

  return data;
}

export async function fetchNoteById(noteId: string): Promise<Note> {
  const { data } = await noteHubApi.get<Note>(`/notes/${noteId}`);
  return data;
}

export async function createNote(note: CreateNoteParams): Promise<Note> {
  const { data } = await noteHubApi.post<Note>("/notes", note);
  return data;
}

export async function deleteNote(noteId: string): Promise<Note> {
  const { data } = await noteHubApi.delete<Note>(`/notes/${noteId}`);
  return data;
}