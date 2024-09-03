import {
    CrumpledPaperIcon,
    GlobeIcon,
    HobbyKnifeIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircledIcon,
    ReloadIcon
} from "@radix-ui/react-icons"

export const leadTypes = [
  {
    id: "battle",
    label: "Battle",
    icon: HobbyKnifeIcon,
  },
  {
    id: "exploration",
    label: "Exploration",
    icon: GlobeIcon,
  },
  {
    id: "investigation",
    label: "Investigation",
    icon: MagnifyingGlassIcon,
  },
  {
    id: "repeatable",
    label: "Repeatable",
    icon: ReloadIcon,
  },
  {
    id: "resource",
    label: "Resource",
    icon: CrumpledPaperIcon,
  },
  {
    id: "other",
    label: "Other",
    icon: QuestionMarkCircledIcon,
  }
]