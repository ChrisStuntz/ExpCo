import { useState } from "react"
import { Input } from "~/components/ui/input"

export const EditableCell = () => {
    const [value, setValue] = useState("")

    return <Input value={value} className="text-black" onChange={e => setValue(e.target.value)} />
}