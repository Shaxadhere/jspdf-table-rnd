import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WalletStatement from './WalletStatement.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WalletStatement />
  </StrictMode>,
)
