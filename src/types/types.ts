export interface PageUrl {
  data: {
    attributes: {
      url: string
    }
  }
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
     data: {
      attributes: {
        mainBanner: MainBanner[]
        services: Services[]
        seo: Seo
        modalVideo: {
          providerUid: string
        }
      }
    }
  }
  teams: {
    data: Team[]
  }
  generalinfo: {
    data: {
      attributes: GeneralInfoProperties
    }
  }
  locations: {
    data: AddressMap[]
  }
  header: Menu[]
  footer: Menu[]
}

export interface TeamPage {
  teampage: {
     data: {
      attributes: {
        title: string
        desc: string
        seo: Seo
      }
    }
  }
  locations: {
    data: AddressMap[]
  }
  generalinfo: {
    data: {
      attributes: GeneralInfoProperties
    }
  }
  teams: {
    data: Team[]
  }
  header: Menu[]
  footer: Menu[]
}

export interface LocationsPage {
  locatie: {
     data: {
      attributes: {
        title: string
        desc: string
        seo: Seo
        url: string
      }
    }
  }
  teams: {
    data: Team[]
  }
  generalinfo: {
    data: {
      attributes: GeneralInfoProperties
    }
  }
  locations: {
    data: AddressMap[]
  }
  header: Menu[]
  footer: Menu[]
}

export interface ContactsUsPage {
  contactus: {
      data: {
      attributes: {
        title: string
        seo: Seo
      }
    }
  }
  teams: {
    data: Team[]
  }
  generalinfo: {
    data: {
      attributes: GeneralInfoProperties
    }
  }
  locations: {
    data: AddressMap[]
  }
  header: Menu[]
  footer: Menu[]
}


export interface MenuItemFields {
  title: string
  path: string
  related: {
    attributes: {
      url: string
      title: string
      publishedAt: string
    }
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
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export interface Services {
  title: string
  link: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  img: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export interface Team {
  attributes: {
    name: string
    email: string
    phone: string
    bigRegistrationNumber: string,
    desc: string
    url: string
    img: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

export interface AddressMap {
  attributes: {
    title: string,
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
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}