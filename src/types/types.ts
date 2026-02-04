export interface PageUrl {
  url: string
}

export interface SocialLinks {
  facebook: string
  youtube: string
  instagram: string
}

interface GeneralInfoProperties {
  contactsInfo: ContactInfo
  privacyPolicyPage: PageUrl
  termsAndConditionsPage: PageUrl
  socialLinks: SocialLinks
}

export interface HomePage {
  home: {
    mainBanner: MainBanner[]
    services: Services[]
    seo: Seo
    modalVideo: {
      providerUid: string
    }
  }
  teams: Team[]
  generalinfo: GeneralInfoProperties
  locations: AddressMap[]
  header: Menu[]
  footer: Menu[]
}

export interface TeamPage {
  teampage: {
    title: string
    desc: string
    seo: Seo
  }
  locations: AddressMap[]
  generalinfo: GeneralInfoProperties
  teams: Team[]
  header: Menu[]
  footer: Menu[]
}

export interface LocationsPage {
  locatie: {
    title: string
    desc: string
    seo: Seo
    url: string
  }
  teams: Team[]
  generalinfo: GeneralInfoProperties
  locations: AddressMap[]
  header: Menu[]
  footer: Menu[]
}

export interface ContactsUsPage {
  contactus: {
    title: string
    seo: Seo
  }
  teams: Team[]
  generalinfo: GeneralInfoProperties
  locations: AddressMap[]
  header: Menu[]
  footer: Menu[]
}


export interface MenuItemFields {
  title: string
  path: string
  related: {
    url: string
    title: string
    publishedAt: string    
  }
}

export interface Menu extends MenuItemFields {
  items: [MenuItemFields & {    
    items: [MenuItemFields & {
      items: [MenuItemFields]
    }]
  }]
}

export interface ContactInfo {
  email: string
  phone: string
  mainAddress: string
}

export interface Seo {
  metaTitle: string
  metaDescription: string
  canonicalURL: string
}

export interface MainBanner {
  title: string
  description: string
  link: string
  buttonText: string
  img: {

        url: string
      
    
  }
}

export interface Services {
  title: string
  link: {

        url: string

  }
  img: {
        url: string
  }
}

export interface Team {
  name: string
  email: string
  phone: string
  bigRegistrationNumber: string
  desc: string
  url: string
  displayPriority: number
  img: {
    url: string
  }
}

export interface AddressMap {
  title: string
  coordinates: string
  url: string
  phone: string
  email: string
  address: string
  displayPriority: number
  onlyForKids: boolean
  workingHours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  img: {
    url: string
  }
}