"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const casterData = [
    { tradition: "arcane", count: 2, fill: "var(--color-arcane)" },
    { tradition: "divine", count: 2, fill: "var(--color-divine)" },
    { tradition: "occult", count: 5, fill: "var(--color-occult)" },
    { tradition: "primal", count: 2, fill: "var(--color-primal)"},
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-6))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-7))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-8))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-9))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-10))",
  },
} satisfies ChartConfig

const casterConfig = {
    tradition: {
        label: "Tradition",
    },
    arcane: {
        label: "Arcane",
        color: "hsl(var(--chart-6))",
    },
    divine: {
        label: "Divine",
        color: "hsl(var(--chart-8))",
    },
    occult: {
        label: "Occult",
        color: "hsl(var(--chart-9))",
    },
    primal: {
        label: "Primal",
        color: "hsl(var(--chart-7))",
    },
} satisfies ChartConfig

export function CharacterChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Caster Traditions</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={casterConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={casterData} dataKey="count" label nameKey="tradition" />
            <ChartLegend
              content={<ChartLegendContent nameKey="tradition" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          We have quite a few occult casters
        </div>
      </CardFooter>
    </Card>
  )
}
