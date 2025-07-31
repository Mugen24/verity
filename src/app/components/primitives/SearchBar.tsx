"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk"
import { Search } from "lucide-react"
import { useRef, useState } from "react"

export function SearchBar({className}: {
    className?: string
}) {
    const [container, setContainer] = useState(null)
    const [value, setValue] = useState("")
    console.log(value)
    return (
        <>
            <section
                className={`
                    grid
                    grid-cols-[1fr_50px]
                    w-[50vw]
                    ${className}
                `}
            >
                <Command
                    className={`
                        col-start-1
                        col-end-2
                    `}
                    title="search"
                >
                    <CommandInput 
                        asChild
                        value={value}
                        onValueChange={setValue}
                    >
                        <Input
                            type="search"
                            className="
                                pl-4
                                rounded-l-3xl
                                bg-input
                                rounded-r-none
                                border-1
                                border-solid
                                outline-none
                                focus-visible:border-primary
                                focus-visible:ring-0
                                text-[0.7rem]
                            "
                            placeholder="What do you need help with?"
                        >
                        </Input>
                    </CommandInput>
                    <CommandList
                        className={`
                            border-1
                            bg-muted/60
                            mt-2
                            ${!value ? "hidden": ""}
                        `}
                    >
                        <CommandItem 
                            key={"test"}
                            value={"test"}
                            className={`
                                h-7
                                pl-4
                                inline-flex
                                items-center
                            `}
                        >
                            testing
                        </CommandItem>
                    </CommandList>
                </Command>
                <Button
                    className="
                        col-start-2
                        col-end-2
                        rounded-r-3xl
                        rounded-l-none
                    "
                >
                    <Search size={20}/>
                </Button>
            </section>
        </>
    )
}