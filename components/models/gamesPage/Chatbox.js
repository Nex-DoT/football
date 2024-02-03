import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100 p-10">
      <div className="flex flex-col h-[600px] w-[400px] border rounded-lg overflow-hidden bg-white shadow-lg">
        <header className="flex items-center justify-between px-4 py-2 border-b bg-gray-500 text-white">
          <div className="flex items-center gap-2 justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Team 1 Avatar" src="/team1-avatar.jpg" />
              <AvatarFallback>T1</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Team 2 Avatar" src="/team2-avatar.jpg" />
              <AvatarFallback>T2</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold ml-2">Game Chat</h2>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex items-start gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage alt="Team 1 Avatar" src="/team1-avatar.jpg" />
              <AvatarFallback>T1</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                <p className="text-sm">Hello, are we ready for the game?</p>
                <p className="text-xs text-gray-500 mt-1">10:15 AM</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage alt="Team 2 Avatar" src="/team2-avatar.jpg" />
              <AvatarFallback>T2</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                <p className="text-sm">Yes, we are!</p>
                <p className="text-xs text-gray-500 mt-1">10:16 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t p-2 flex items-center">
          <Input className="flex-grow" placeholder="Type a message..." />
          <Button className="ml-2">Send</Button>
        </div>
      </div>
    </div>
  )
}