export const Post = ({ postUserImg, postUserName, postMessage, hasRecentPost, recentPostName, isNewNotification, postedAgo, hasGroup, groupName, hasPrivateMessage, privateMessage, hasPicture, pictureImg}) => {
  return (
    <article className={`flex gap-2 py-3 px-2 rounded-lg transition-all duration-100 ease-out ${isNewNotification ? "bg-very-light-grayish-blue" : "bg-white"}`}>
      <picture className="flex-initial w-10 sm:w-12">
        <img src={postUserImg} alt={postUserName} className="w-8 sm:w-10 h-8 sm:h-10 mt-2 sm:mt-1" />
      </picture>

      <div className="text-grayish-blue flex flex-col flex-initial w-full">     
        <p>
          <strong className="text-very-dark-blue cursor-pointer hover:text-blue">{postUserName}</strong> {postMessage} {hasRecentPost && <span className="text-dark-grayish-blue font-semibold">{recentPostName}</span>} {hasGroup && <span className="text-blue font-semibold cursor-pointer hover:text-blue/80">{groupName}</span>}{isNewNotification && <span className="inline-block w-2 h-2 mb-0.5 ml-1 bg-red rounded-full"></span>}
        </p>
        
        <p className="text-sm mt-0.5">{postedAgo} ago</p>

        {hasPrivateMessage && <p className="text-sm leading-6 p-3 border rounded-md mt-2 cursor-pointer hover:bg-light-grayish-blue-1">{privateMessage}</p>}
      </div>

      {
        hasPicture &&
          <picture className="flex-initial w-10 sm:w-12 cursor-pointer">
            <img src={pictureImg} alt="chess" className="w-8 sm:w-10 h-8 sm:h-10 mt-1" />
          </picture>
      }
    </article>
  )
}
