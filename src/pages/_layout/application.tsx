import { Outlet } from "react-router-dom";

export function ApplicationLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-2 py-12">
      <Outlet />
    </div>
  );
}
