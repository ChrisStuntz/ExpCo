import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"

<Popover>
  <PopoverTrigger>
    <button className="btn btn-ghost btn-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </PopoverTrigger>
  <PopoverContent className="w-80 rounded-lg bg-base-100 p-4 shadow-lg">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="flex items-center gap-2">
        <label className="label">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="label-text">Active</span>
        </label>
        <label className="label">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="label-text">Completed</span>
        </label>
      </div>
    </div>
  </PopoverContent>
</Popover>