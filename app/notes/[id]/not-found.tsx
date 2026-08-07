import Link from "next/link";


export default function NoteNotFound() {
    return (
        <main>
            <h1>Note not found</h1>
            <p>The requested note does not exist or has been deleted.</p>
            <Link href="/notes">Back to notes</Link>
        </main>
    );
}