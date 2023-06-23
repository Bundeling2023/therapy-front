export interface HomePage {
  home: {
     data: {
      attributes: {
        mainBanner: MainBanner[]
        services: Services[]
        teams: {
          data: Team[]
        }
        seo: Seo
        modalVideo: {
          providerUid: string
        }
      }
    }
  }
  generalinfo: {
    data: {
      attributes: {
        contactsInfo: ContactInfo
        privacyPolicyPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        termsAndConditionsPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
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
  generalinfo: {
    data: {
      attributes: {
        contactsInfo: ContactInfo
        privacyPolicyPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        termsAndConditionsPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
    }
  }
  teams: {
    data: Team[]
  }
  header: Menu[]
  footer: Menu[]
}

export interface LocatiesPage {
  locatie: {
     data: {
      attributes: {
        title: string
        desc: string
        seo: Seo
      }
    }
  }
  generalinfo: {
    data: {
      attributes: {
        contactsInfo: ContactInfo
        privacyPolicyPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        termsAndConditionsPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
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
  generalinfo: {
    data: {
      attributes: {
        contactsInfo: ContactInfo
        privacyPolicyPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        termsAndConditionsPage: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
    }
  }
  locations: {
    data: AddressMap[]
  }
  header: Menu[]
  footer: Menu[]
}


export interface Menu {
  title: string
  path: string
  related: {
    attributes: {
      url: string
      title: string
    }
  }
  items: [{
    title: string
    path: string
    related: {
      attributes: {
        url: string
        title: string
      }
    }
    items: [{
      title: string
      path: string
      related: {
        attributes: {
          url: string
          title: string
        }
      }
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