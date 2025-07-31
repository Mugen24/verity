import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LocationForm() {
    return (
        <>
            <Card 
                className="
                    w-[400px]
                ">
                <CardHeader>
                    <CardTitle
                        className="
                            text-2xl
                        "
                    >
                        Location
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form>
                        <div 
                            className="
                                flex flex-col gap-6
                            ">
                            <div className="flex flex-row gap-5">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input
                                        id="first-name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="apt_num">Apartment, suite, etc.</Label>
                                </div>
                                <Input id="apt_num" type="text" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="city">City</Label>
                                </div>
                                <Input id="city" type="text" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="postcode">Postcode</Label>
                                </div>
                                <Input id="city" type="number" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Submit 
                    </Button>
                </CardFooter>
                </Card>
        </>
    )
}