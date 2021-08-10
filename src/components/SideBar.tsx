import * as React from "react";
import { Button } from "./Button";

import "../styles/sidebar.scss";

interface SideBarProps {
  genres?: [
    {
      id: number;
      name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
      title: string;
    }
  ];
  clickButton: Function;
  selectedGenreId: number;
}

export function SideBar({
  genres,
  clickButton,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres &&
          genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => clickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
      </div>
    </nav>
  );
}
