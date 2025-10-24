import { createFileRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <p>Bem-vindo ao App Generator!</p>
      <p>Este é o ponto de partida para criar seu aplicativo.</p>
    </div>
  )
}