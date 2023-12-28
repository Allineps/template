import { createStore } from "vuex";

const store = createStore({
    state: {
        appName:"Vue3 Vuex",
        menu: [
            { name: 'Admin', link: '0',  },
          { name: 'valami', link: '1',
              subs: [
              { name: 'valami', link: '0-0',
              subs: [
                { name: 'nyitot ', link: '0-0',  },
                { name: 'zárt' , link: '0-1',  }
              ]
          },
              { name: 'valami', link: '0-1',
                  subs: [
                { name: 'nyitot', link: '0-0',  },
                { name: 'zárt', link: '0-1',  }
              ]  },

            ]
            },
          { name: 'Beállitások', link: '2',
              subs: [
                { name: 'Profil ', link: '2-0',
              subs: [
                { name: 'e-mail', link: '0-0',  },
                { name: 'jelszó', link: '0-1',  }
              ]
          },
              { name: 'Törzsadat', link: '2-1', }
            ]
          },
          { name: 'Egyéb', link: '3',
              subs: [
                { name: 'egyéb1', link: '3-1',  },
              { name: 'egyéb2', link: '3-2',  }
            ]
          },
          { name: '1', link: '0',  },
          { name: '2', link: '0',  },
          { name: '3', link: '0',  }
        ],
    },
    getters: {
       appName (state){
        return state.menu
       }
    }
})

export default store
