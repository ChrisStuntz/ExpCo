import Link from "next/link";

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
        <h2>Howdy partner</h2>
        <div className="flex flex-col">
          <table className="min-w-full justify-center">
            <thead className="border-b">
              <tr className="">
                <th scope="col" className="px-6 py-4">ID</th>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Skills</th>
                <th scope="col" className="px-6 py-4">Task DC</th>
                <th scope="col" className="px-6 py-4">Total Points</th>
                <th scope="col" className="px-6 py-4">Points Remaining</th>
              </tr>
            </thead>
            <tbody className="">
              {mockTasks.map((task) => (
                <tr key={task.id} className="justify-center border-b">
                  <td className="px-6 py-4">{task.id}</td>
                  <td className="px-6 py-4">{task.name}</td>
                  <td className="px-6 py-4">{task.skills}</td>
                  <td className="px-6 py-4">{task.dc}</td>
                  <td className="px-6 py-4">{task.total_points}</td>
                  <td className="px-6 py-4">{task.points_remaining}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
