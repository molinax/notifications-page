import markImg from "../assets/images/avatar-mark-webber.webp"
import angelaImg from "../assets/images/avatar-angela-gray.webp"
import jacobImg from "../assets/images/avatar-jacob-thompson.webp"
import rizkyImg from "../assets/images/avatar-rizky-hasanuddin.webp"
import kimberlyImg from "../assets/images/avatar-kimberly-smith.webp"
import chessImg from "../assets/images/image-chess.webp"
import nathanImg from "../assets/images/avatar-nathan-peterson.webp"
import annaImg from "../assets/images/avatar-anna-kim.webp"

const usersImg = {
  "Mark Webber": markImg,
  "Angela Gray": angelaImg,
  "Jacob Thompson": jacobImg,
  "Rizky Hasanuddin": rizkyImg,
  "Kimberly Smith": kimberlyImg,
  "Nathan Peterson": nathanImg,
  "Anna Kim": annaImg
}

const getUserImg = (user) => usersImg.hasOwnProperty(user) ? usersImg[user] : undefined
const picturesImg = [chessImg]

export const usersImgCollection = {
  getUserImg,
  picturesImg,
}