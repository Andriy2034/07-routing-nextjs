"use client";

import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

import Modal from "@/components/Modal/Modal";
import type { Note } from "@/types/note";

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <h2>{css.title}</h2>
      <p>{css.tag}</p>
      <p>{css.content}</p>
      <p>{new Date(note.createdAt).toLocaleDateString()}</p>
    </Modal>
  );
}