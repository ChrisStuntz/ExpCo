import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"


const mockTasks = [
  {
    id: 1,
    name: "Build Quarry",
    skills: "Athletics, Crafting",
    dc: 15,
    total_points: 25,
    points_remaining: 8,
  },
  {
    id: 2,
    name: "Study Notes",
    skills: "Arcana, Occultism",
    dc: 20,
    total_points: 40,
    points_remaining: 34,
  },
  {
    id: 3,
    name: "Razdius Manual",
    skills: "Religion, Acamaya Lore",
    dc: 22,
    total_points: 60,
    points_remaining: 23
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4">
        <div className="flex">
        <Table>
          <TableCaption>All the downtime activities</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Skills</TableHead>
              <TableHead className="text-center">DC</TableHead>
              <TableHead className="text-center">Total Points</TableHead>
              <TableHead className="text-center">Points Remaining</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              mockTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="text-center">{task.name}</TableCell>
                  <TableCell className="text-center">{task.skills}</TableCell>
                  <TableCell className="text-center">{task.dc}</TableCell>
                  <TableCell className="text-center">{task.total_points}</TableCell>
                  <TableCell className="text-center">{task.points_remaining}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        </div>
      </div>
    </main>
  );
}
