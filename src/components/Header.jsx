export const Header = ({ notificationsCount, resetNotifications }) => {
  return (
    <header className="flex justify-between">
      <h1 className="text-xl text-very-dark-blue font-bold inline-flex items-baseline gap-2">
        Notifications
        <span className="bg-blue text-white text-md pb-0.5 px-4 rounded-lg">{notificationsCount}</span>
      </h1>

      <button onClick={resetNotifications} className="text-dark-grayish-blue hover:text-blue">Mark all as read</button>
    </header>
  )
}
