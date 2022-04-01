export const fetchResource = async (
  resource,
  { method = 'GET', headers = { 'Content-Type': 'application/json' }, ...opt } = {}
) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_URL}/${resource}`, { ...opt, method, headers })
    const data = await res.json()
    return { status: res.status, ...data }
  } catch (err) {
    throw err
  }
}
