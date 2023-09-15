import { usersImgCollection } from "./usersImg.js"

const { getUserImg, picturesImg } = usersImgCollection

export const postCollection = [
  {
    postUserImg: getUserImg("Mark Webber"),
    postUserName: "Mark Webber",
    postMessage: "reacted to your recent post",
    hasRecentPost: true,
    recentPostName: "My first tournament today!",
    isNewNotification: true,
    postedAgo: "1m",
  },

  {
    postUserImg: getUserImg("Angela Gray"),
    postUserName: "Angela Gray",
    postMessage: "followed you",
    isNewNotification: true,
    postedAgo: "5m",
  },

  {
    postUserImg: getUserImg("Jacob Thompson"),
    postUserName: "Jacob Thompson",
    postMessage: "has joined your group",
    hasGroup: true,
    groupName: "Chess club",
    isNewNotification: true,
    postedAgo: "1 day",
  },

  {
    postUserImg: getUserImg("Rizky Hasanuddin"),
    postUserName: "Rizky Hasanuddin",
    postMessage: "sent you a private message",
    hasPrivateMessage: true,
    privateMessage: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
    I'm already having lots of fun and improving my game.`,
    isNewNotification: false,
    postedAgo: "5 days",
  },

  {
    postUserImg: getUserImg("Kimberly Smith"),
    postUserName: "Kimberly Smith",
    postMessage: "commented on your picture",
    hasPicture: true,
    pictureImg: picturesImg[0],
    isNewNotification: false,
    postedAgo: "1 week",
  },

  {
    postUserImg: getUserImg("Nathan Peterson"),
    postUserName: "Nathan Peterson",
    postMessage: "reacted to your recent post",
    hasRecentPost: true,
    recentPostName: "5 end-game strategies to increase your win rate",
    isNewNotification: false,
    postedAgo: "2 weeks",
  },

  {
    postUserImg: getUserImg("Anna Kim"),
    postUserName: "Anna Kim",
    postMessage: "left the group",
    hasGroup: true,
    groupName: "Chess club",
    isNewNotification: false,
    postedAgo: "2 weeks",
  },
]
