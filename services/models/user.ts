import AuthController from "@services/controller/auth.controller"
import { IUser, IUserInfo, NewUserData } from "@services/types/auth"
import assert from "assert"

export default class User implements IUser {
  id = ""

  username = ""

  accountActivate = false

  accountBlocked = false

  roleNames: string[] = []

  userInfos: IUserInfo = {
    id: "",

    firstName: "",

    lastName: "",

    email: "",

    lang: "",

    phone: "",

    countryCode: "",

    socialProfil: {
      hobbies: [],

      interestCenters: [],

      activityAreas: [],

      socialNetworkLinks: []
    },

    datation: {
      creationTime: "",

      lastUpdateTime: "",

      version: 0
    }
  }

  constructor(user: IUser) {
    Object.assign(this, user)
  }

  static login = async (username: string, password: string) => {
    assert(username, "Username cannot be empty")
    assert(password, "Password cannot be empty")

    const controller = new AuthController()

    const user = await controller.login(username, password)

    return new User(user)
  }

  static register = async (userData: NewUserData, otp: string) => {
    assert(userData, "User cannot be empty")
    assert(otp, "OTP cannot be empty")

    const controller = new AuthController()

    const user = await controller.register(userData, otp)

    return new User(user)
  }

  static sendOTP = async (email: string, lang?: string): Promise<boolean> => {
    assert(email, "Email cannot be empty")

    const controller = new AuthController()

    const isOTPSent = await controller.sendOTP(email, lang)

    return isOTPSent
  }

  static validateOTP = async (email: string, otp: string): Promise<boolean> => {
    assert(email, "Email cannot be empty")
    assert(otp, "otp cannot be empty")

    const controller = new AuthController()

    const isOTPValid = await controller.validateOTP(email, otp)

    return isOTPValid
  }

  static getPasswordChangeOTP = async (email: string): Promise<IUser> => {
    assert(email, "Email cannot be empty")

    const controller = new AuthController()

    const user = await controller.resetPasswordOTP(email)

    return new User(user)
  }

  static resetPassword = async (
    otp: string,
    newPassword: string,
    username: string
  ): Promise<IUser> => {
    assert(newPassword, "Password can not be empty")
    assert(otp, "Otp can not be empty")
    assert(username, "Username cannot be empty")

    const controller = new AuthController()

    const user = await controller.resetPassword(otp, newPassword, username)

    return new User(user)
  }

  static isUsernameUsed = async (username: string): Promise<string> => {
    assert(username, "Username cannot be empty")

    const controller = new AuthController()

    const res = await controller.verifyUsername(username)

    return res
  }

  static isPhoneNumberUsed = async (phoneNumber: string): Promise<string> => {
    assert(phoneNumber, "phoneNumber cannot be empty")

    const controller = new AuthController()

    const res = await controller.verifyPhoneNumber(phoneNumber)

    return res
  }

  static isEmailUsed = async (email: string): Promise<string> => {
    assert(email, "Email cannot be empty")

    const controller = new AuthController()

    const res = await controller.verifyEmail(email)

    return res
  }
}
