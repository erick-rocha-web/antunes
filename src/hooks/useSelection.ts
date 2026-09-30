import { useCallback, useEffect, useState } from 'react'
import { lookIds } from '../data/looks'
import { STORAGE_KEY, parseStored, removeId, toggleId } from '../lib/selection'

function readStored(): string[] {
  try {
    return parseStored(window.localStorage.getItem(STORAGE_KEY), lookIds)
  } catch {
    // Armazenamento bloqueado: a seleção vive só na memória desta visita.
    return []
  }
}

export function useSelection() {
  const [ids, setIds] = useState<string[]>(readStored)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch {
      // Sem persistência, a interface segue funcionando.
    }
  }, [ids])

  const toggle = useCallback((id: string) => setIds((current) => toggleId(current, id)), [])
  const remove = useCallback((id: string) => setIds((current) => removeId(current, id)), [])
  const clear = useCallback(() => setIds([]), [])

  return { ids, toggle, remove, clear }
}
