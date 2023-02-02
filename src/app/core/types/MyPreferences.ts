export type MyPreferences = {
  SETTINGS: {
    // Inbox page
    MAIL_SHOW_BUTTON_SYNC: boolean | any
    MAIL_SHOW_BUTTON_CLEAN: boolean | any
    MAIL_SHOW_BUTTON_SEARCH: boolean | any
    // Create page
    CONFIRM_BEFORE_SENDING: boolean | any
    CONFIRM_BEFORE_FILING: boolean | any
    // Detail page
    MAIL_SHOW_BUTTON_UN_READ: boolean | any
    MAIL_SHOW_BUTTON_REMOVE: boolean | any
    MAIL_SHOW_BUTTON_ARCHIVE: boolean | any
    // General page
    CONFIRM_BEFORE_REMOVING: boolean | any
    DB: { DI: string | any; DS: string | any }
  }

  // Otros
  // inbox: {
  //   MAIL_SHOW_BUTTON_SYNC: boolean
  //   MAIL_SHOW_BUTTON_CLEAN: boolean
  //   MAIL_SHOW_BUTTON_SEARCH: boolean
  // }
  // create: {
  //   CONFIRM_BEFORE_SENDING: boolean
  //   CONFIRM_BEFORE_REMOVING: boolean
  //   CONFIRM_BEFORE_FILING: boolean
  // }
  // detail: {
  //   MAIL_SHOW_BUTTON_UN_READ: boolean
  //   MAIL_SHOW_BUTTON_REMOVE: boolean
  //   MAIL_SHOW_BUTTON_ARCHIVE: boolean
  //   CONFIRM_BEFORE_REMOVING: boolean
  // }
  // general: {
  //   DB: { DI: string; DS: string }
  // }
}
