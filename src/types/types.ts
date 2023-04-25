export interface HomePage {
  home: {
     data: {
      attributes: {
        mainBanner: MainBanner[]
        services: Services[]
        teams: {
          data: Team[]
        }
        contactsInfo: ContactInfo
        seo: Seo
        modalVideo: {
          providerUid: string
        }
      }
    }
  }
  addresses: {
    data: AddressMap[]
  }
  header: Menu[]
  footer: Menu[]
}

export interface Menu {
  title :string
  path :string
  items: [{
    title: string
    path: string
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
  link: string
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
    coordinates: string
    description: string
  }
}