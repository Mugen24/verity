import { Navbar } from "./primitives/NavBar";

export function Topbar() {
    return (
        <section
            className="
                grid
                grid-cols-[auto_min-content]
                border-b-1
                w-screen
                px-(--text-padding)
                h-1/6
            "
        >
            <h1>LOGO</h1>
            <Navbar
                className="
                    col-start-2
                "
            />
        </section>
    )
}