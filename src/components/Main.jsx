import { useState } from "react"
import { Header } from "./Header"
import { Posts } from "./PostComponents/Posts"
export const Main = () => {
  const [notificationsCount, setNotificationsCount] = useState()

  const resetNotifications = () => setNotificationsCount(0)

  return (
    <main className="bg-white min-h-screen sm:flex sm:items-center sm:justify-center sm:bg-very-light-grayish-blue">
      <section className="bg-white w-[93%] max-w-2xl mx-auto py-4 flex flex-col gap-8 sm:p-6 sm:rounded-xl sm:shadow-sm">
        <Header notificationsCount={notificationsCount} resetNotifications={resetNotifications} />

        <Posts notificationsCount={notificationsCount} setNotificationsCount={setNotificationsCount} />
      </section>
    </main>
  )
}

