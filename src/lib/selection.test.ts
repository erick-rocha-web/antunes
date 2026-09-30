import { describe, expect, it } from 'vitest'
import { addId, parseStored, removeId, toggleId } from './selection'

const known = ['a', 'b', 'c']

describe('seleção', () => {
  it('não duplica uma referência salva várias vezes', () => {
    expect(addId(addId(['a'], 'b'), 'b')).toEqual(['a', 'b'])
  })

  it('alterna e remove', () => {
    expect(toggleId(['a'], 'a')).toEqual([])
    expect(toggleId(['a'], 'b')).toEqual(['a', 'b'])
    expect(removeId(['a', 'b'], 'a')).toEqual(['b'])
  })

  it('descarta armazenamento inválido, IDs desconhecidos e repetidos', () => {
    expect(parseStored(null, known)).toEqual([])
    expect(parseStored('{quebrado', known)).toEqual([])
    expect(parseStored('{"a":1}', known)).toEqual([])
    expect(parseStored('["a","x",3,"a","c"]', known)).toEqual(['a', 'c'])
  })
})
