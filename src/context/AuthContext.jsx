import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('currentUser')
    return saved ? JSON.parse(saved) : null
  })

  function register(name, email, phone, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]')

    if (users.find(u => u.email === email)) {
      return 'Email is already registered'
    }

    const newUser = { name, email, phone, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    return null
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)

    if (!found) {
      return 'Invalid email or password'
    }

    setUser(found)
    localStorage.setItem('currentUser', JSON.stringify(found))
    return null
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('currentUser')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
