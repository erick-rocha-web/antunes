// Regras puras da seleção. Só IDs de looks: nenhum dado pessoal.
export const STORAGE_KEY = 'antunes:selecao:v1'

export function addId(ids: string[], id: string): string[] {
  return ids.includes(id) ? ids : [...ids, id]
}

export function removeId(ids: string[], id: string): string[] {
  return ids.filter((item) => item !== id)
}

export function toggleId(ids: string[], id: string): string[] {
  return ids.includes(id) ? removeId(ids, id) : addId(ids, id)
}

/** Aceita só IDs conhecidos, sem repetição. Qualquer conteúdo inválido vira lista vazia. */
export function parseStored(raw: string | null, knownIds: readonly string[]): string[] {
  if (!raw) return []
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    const valid = parsed.filter((item): item is string => typeof item === 'string' && knownIds.includes(item))
    return [...new Set(valid)]
  } catch {
    return []
  }
}
