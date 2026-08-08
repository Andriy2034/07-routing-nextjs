"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import type { Note } from "@/types/note";
import css from "./NotePreview.module.css";

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewClientProps) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>
            {new Date(note.createdAt).toLocaleDateString()}
          </p>
          <button type="button" className={css.backBtn} onClick={handleClose}>
            Back
          </button>
        </div>
      </div>
    </Modal>
  );
}