export interface HomePage {
  home: {
     data: {
      attributes: {
        mainBanner: MainBanner[]
        services: Services[]
        team: Team[]
        addressesMap: AddressMap[]
        contactsInfo: ContactInfo
        seo: Seo
        modalVideo: {
          providerUid: string
        }
      }
    }
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

export interface AddressMap {
  coordinates: string
  description: string
}