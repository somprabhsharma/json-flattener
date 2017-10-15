const _recurse = (cur, prop, result) => {
  let l

  if (Object(cur) !== cur) {
    result[prop] = cur
  } else if (Array.isArray(cur)) {
    for (let i = 0, l = cur.length; i < l; i++) {
      _recurse(cur[i], prop + '[' + i + ']', result)
    }
    if (l == 0) {
      result[prop] = []
    }
  } else {
    let isEmpty = true
    for (const p in cur) {
      isEmpty = false
      _recurse(cur[p], prop ? prop + '.' + p : p, result)
    }
    if (isEmpty && prop) {
      result[prop] = {}
    }
  }
  return result
}

/**
 * Flatten json object
 * @param data
 * @returns {*}
 */
const flatten = (data) => {
  const result = {}
  return _recurse(data, '', result)
}

/**
 * Unflatten json object
 * @param data
 * @returns {*}
 */
const unflatten = (data) => {
  if (Object(data) !== data || Array.isArray(data)) {
    return data
  }

  const regex = /\.?([^.[\]]+)|\[(\d+)\]/g
  const resultholder = {}

  for (const elem in data) {
    let cur = resultholder
    let prop = ''
    let match

    match = regex.exec(elem)
    while (match !== null) {
      cur = cur[prop] || (cur[prop] = (match[2] ? [] : {}))
      prop = match[2] || match[1]
      match = regex.exec(elem)
    }

    cur[prop] = data[elem]
  }

  return resultholder[''] || resultholder
}

module.exports = {
  flatten,
  unflatten
}