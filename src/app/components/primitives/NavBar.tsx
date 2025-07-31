"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar({className}: {className: string}) {
  const components = [
    {
      href: "/",
      title: "Home"
    },
    {
      href: "/auth",
      title: "Sign up / Log in"
    },
    {
      href: "/provider_setup",
      title: "Become a provider"
    }
  ]
  return (
    <section
      className={`
        ${className}
        w-fit
        flex
        flex-row
      `}
    >
      {
        components.map(b => {
          return (
            <Button
              key={b.title}
              variant={"ghost"}
              size={"lg"}
              className="
                px-4
                hover:bg-white
              "
            >
              <Link
                href={b.href}
              >
                {b.title}
              </Link>
            </Button>
          )
        })
      }
    </section>
  )
}
