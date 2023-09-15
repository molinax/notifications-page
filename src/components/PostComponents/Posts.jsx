import { useState, useEffect } from "react"
import { Post } from "./Post"
import { postCollection } from "../../functions/postCollection"

export const Posts = ({ notificationsCount, setNotificationsCount }) => {
  const [posts, setPosts] = useState(postCollection)
  
  useEffect(() => updateNotificationCount(), [notificationsCount])

  useEffect(() => getNotificationsCount(posts, "isNewNotification"), [posts])
  
  const getNotificationsCount = (obj, notificationProperty) => {
    let count = 0
    obj.map(item => item[notificationProperty] && count++)
    setNotificationsCount(count)
  }

  const updateNotificationCount = () => {
    if(notificationsCount === 0) {
      const updatedCollection = posts.map(item => ({ ...item, isNewNotification: false }))
      setPosts(updatedCollection)
    }
  }

  return (
    <section className="flex flex-col gap-3">
      {
        posts.map((postItem, index) => (
          <Post key={index} {...postItem} />
        ))
      }
    </section>
  )
}
