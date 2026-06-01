import { useAuth } from './context/AuthContext'

function App() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">CMS App</h1>
      {isAuthenticated ? (
        <p className="text-green-600">Logged in as: {user?.name} ({user?.role})</p>
      ) : (
        <p className="text-red-500">Not logged in</p>
      )}
    </div>
  )
}

export default App