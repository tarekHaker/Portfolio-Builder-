import React from "react";
import NavUser from "./navUser";
import MediaCard from "../portfiolo";
import FloatingButtons from "../iconUser";

export default function User() {
  const userId = new URLSearchParams(window.location.search).get("id");

  return (
    <div>
      <NavUser />

      <div className="backgroundOnly">
        <div className="portfiolo">
          <MediaCard userId={userId} />
          <MediaCard userId={userId} />
          <MediaCard userId={userId} />
        </div>
        <FloatingButtons />
      </div>
    </div>
  );
}
