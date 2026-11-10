import argon2 from 'argon2'

const options = {
  type: argon2.argon2id,
  memoryCost: 19 * 1024,
  timeCost: 2,
  parallelism: 1
}

export function hashPassword(password) {
  return argon2.hash(password, options)
}

export function verifyPassword(hash, password) {
  return argon2.verify(hash, password)
}
