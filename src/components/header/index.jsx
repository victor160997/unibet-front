import ExtensibleMenu from '../ExtensibleMenu'
import './index.css'

export default function Header() {
  return (
    <header className="MainContainerHeader">
        <div className="SubContainerHeader">
            <div>
                <span className="Logo">Guro do Esporte</span>
            </div>
            <span className="HeaderIem">Home</span>
            <span className="HeaderIem">Análises</span>
            <span className="HeaderIem">Estatísticas</span>
            <span className="HeaderIem">Máximas</span>
            <span className="HeaderIem">Resultados</span>
            <ExtensibleMenu />
        </div>
    </header>
  )
}
