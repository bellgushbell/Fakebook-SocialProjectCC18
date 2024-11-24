import axios from 'axios'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'


const useUserStore = create(persist((set, get) => ({
    user: null,
    token: '',
    login: async (input) => {
        const rs = await axios.post("http://localhost:8899/auth/login", input)
        set({ token: rs.data.token, user: rs.data.user }) //user&tokenมาจาก authcontroller  res.json({ token: token, user: UserData })  login
        console.log('rs.data.token', rs.data.token)

        return rs.data
    },
    logout: () => {
        set({ token: '', user: null })
    }

}), {
    name: 'state',
    storage: createJSONStorage(() => localStorage) //เก็ยบไว้ในlocal storage key state  {"state":{"user":{"id":2,"firstName":"bobby","lastName":"Codecamp","email":"bobby@ggg.mail","mobile":null,"profileImage":"https://www.svgrepo.com/show/393899/avatar-19.svg","coverImage":null},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI4MDI0MTY5LCJleHAiOjE3MzA2MTYxNjl9.zO9Yf0nTE26Er3rsjw2XCsLg3PlhVipSe6gTSsw75co"},"version":0}
}))

export default useUserStore