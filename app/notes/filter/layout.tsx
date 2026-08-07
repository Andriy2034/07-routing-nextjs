import css from "./layout.module.css";
import {ReactNode} from "react";


interface FilterLayoutProps {
    children: ReactNode;
    sidebar: ReactNode;
}


function FilterLayout({ children, sidebar }: FilterLayoutProps) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}

export default FilterLayout;
